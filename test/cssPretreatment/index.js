const str = `
$ib inline-block

$borderColor lightGreen

div

  p

    border 1px solid $borderColor

  color darkkhaki

  .a-b

    background-color lightyellow

    [data]

      padding 15px

      font-size 12px

.d-ib

  display $ib
`;

// 这里可以生成一个简单的额抽象语法树，的函数
function tokenize(text) {
  // 去除多余的空格，逐行解析
  return text
    .trim()
    .split(/\n|\r\n/)
    .reduce((tokens, line, idx) => {
      // 计算缩进空格数
      const spaces = line.match(/^\s+/) || [""]; //匹配开头的空格
      const indent = spaces[0].length; //找出匹配到的空格数
      // 将字符串去首尾空给
      const input = line.trim();
      // 通过空格分割字符串成数组
      const words = input.split(/\s/);
      let value = words.shift();
      // 选择器为单个单词
      if (words.length === 0) {
        tokens.push({
          type: "selector",
          value,
          indent,
        });
      } else {
        //不是单词
        // 这里对变量定义和变量引用做一下区分，方便后面语法分析
        let type = "";
        if (/^\$/.test(value)) {
          //单词首字符为 $
          type = "variableDef";
        } else if (/^[a-zA-Z-]+$/.test(value)) {
          type = "property";
        } else {
          throw new Error(
            `Tokenize error:Line ${idx} "${value}" is not a vairable or property!`
          );
        }
        tokens.push({
          type,
          value,
          indent,
        });
        // 为了后面解析方便这里对变量引用和值进行区分
        while ((value = words.shift())) {
          tokens.push({
            type: /^\$/.test(value) ? "variableRef" : "value",
            value,
            indent: 0,
          });
        }
      }
      return tokens;
    }, []);
}

function parse(tokens) {
  var ast = {
    // ast是要生成的树，最初的根节点为root
    type: "root",
    children: [],
    indent: -1,
  };
  // 记录当前遍历路径
  let path = [ast];
  // 指针，指向上一个选择器结点
  let preNode = ast;
  // 便利到的当前结点
  let node;
  // 用来存储变量值的对象
  let vDict = {};
  while ((node = tokens.shift())) {
    // 对于变量引用，直接存储到vDict中
    if (node.type === "variableDef") {
      if (tokens[0] && tokens[0].type === "value") {
        const vNode = tokens.shift();
        vDict[node.value] = vNode.value;
      } else {
        // 如果不是变量定义，即为变量定义的值是对另一变量的引用
        preNode.rules[preNode.rules.length - 1].value = vDict[node.value];
        // 先把之前缓存变量对应的值取出，然後赋值给之前节点rules的值
      }
      continue;
    }
    // 对于属性，在指针指向的结点rules属性中添加属性
    if (node.type === "property") {
      if (node.indent > preNode.indent) {
        // 当前节点的缩进空格大於之前节点的空格，即当前节点为子节点
        preNode.rules.push({
          property: node.value,
          value: [],
        });
      } else {
        // 小於的情况，即不为子节点
        let parent = path.pop(); // 需要找出当前节点的父节点
        while (node.indent <= parent.indent) {
          parent = path.pop();
        }
        parent.rules.push({
          property: node.value,
          value: [],
        });
        preNode = parent;
        path.push(parent);
      }
      continue;
    }
    // 对于值，添加到value数组中
    if (node.type === "value") {
      try {
        preNode.rules[preNode.rules.length - 1].value.push(node.value); // 然後赋值给之前节点rules的值
      } catch (e) {
        console.error(preNode);
      }
      continue;
    }
    // 对于变量引用，直接替换成对应的值，道理与之前 'variableDef'的情况类似
    if (node.type === "variableRef") {
      preNode.rules[preNode.rules.length - 1].value.push(vDict[node.value]);
      continue;
    }
    // 对于选择器需要创建新的结点，并将指针
    if (node.type === "selector") {
      const item = {
        type: "selector",
        value: node.value,
        indent: node.indent,
        rules: [],
        children: [],
      };
      if (node.indent > preNode.indent) {
        // 当前节点的缩进空格大於之前节点的空格，即当前节点为子节点
        path[path.length - 1].indent === node.indent && path.pop(); // 缩进空格相等，即为兄弟节点
        path.push(item);
        preNode.children.push(item);
        preNode = item;
      } else {
        // 小於的情况，即不为子节点
        let parent = path.pop();
        while (node.indent <= parent.indent) {
          parent = path.pop();
        }
        parent.children.push(item);
        path.push(item);
      }
    }
  }
  return ast;
}

function transform(ast) {
  let newAst = [];
  /**
   * 遍历AST转换成数组，同时将选择器和值拼接起来
   * @param node AST结点
   * @param result 抽象语法数组
   * @param prefix 当前遍历路径上的选择器名称组成的数组
   */
  function traverse(node, result, prefix) {
    let selector = "";
    if (node.type === "selector") {
      selector = [...prefix, node.value]; //  把选择器合并
      result.push({
        selector: selector.join(" "),
        rules: node.rules.reduce((acc, rule) => {
          acc.push({
            property: rule.property,
            value: rule.value.join(" "),
          });
          return acc;
        }, []),
      });
    }
    for (let i = 0; i < node.children.length; i++) {
      // 有子节点，递归处理
      traverse(node.children[i], result, selector);
    }
  }
  traverse(ast, newAst, []);
  return newAst;
}

function generate(nodes) {
  // 遍历抽象语法数组，拼接成CSS代码
  return nodes
    .map((n) => {
      let rules = n.rules.reduce(
        (acc, item) => (acc += `${item.property}:${item.value};`),
        ""
      ); // 先把对象rules属性变成css样式
      return `${n.selector} {${rules}}`; // 返回数组形式的css样式表
    })
    .join("\n");
}

const tokens = tokenize(str);
console.log(tokens);

// token 参数是之前解析的令牌

const ast = parse(tokens);
console.log(ast);
