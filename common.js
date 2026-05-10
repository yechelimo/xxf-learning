// ==================== 学生学习系统 - 共享数据与函数 ====================
// 版本：v2.0 扩充版（36章详细知识点 + 120+练习题）

// ==================== 课程数据 ====================
var courses = [
  {
    "id": "python",
    "icon": "🐍",
    "title": "Python编程基础",
    "desc": "系统学习 Python 语法、数据结构、控制流、函数、文件操作、面向对象编程等核心知识，从零打好编程基础。",
    "chapters": [
      {
        "title": "第1章 Python概述与环境搭建",
        "summary": "本章重点：理解Python语言特点，完成开发环境搭建，编写并运行第一个Python程序。",
        "content": [
          {
            "type": "text",
            "text": "Python 是一种解释型、面向对象、动态类型的高级编程语言，由荷兰程序员 Guido van Rossum 于 1991 年首次发布。经过 30 多年的发展，Python 已经成为数据科学、人工智能、Web 开发、自动化运维等领域最受欢迎的语言之一。Python 的设计哲学强调代码的可读性和简洁性——'用一种方法，最好是只有一种方法来做一件事'。"
          },
          {
            "type": "list",
            "title": "Python 核心特点（为什么学Python）",
            "items": [
              "语法简洁优雅：使用缩进定义代码块，代码量通常只有 Java/C++ 的 1/3 到 1/5",
              "解释型语言：无需编译，写完即可运行，开发调试效率极高",
              "丰富的生态系统：PyPI 上有超过 40 万个第三方包（NumPy、Pandas、Matplotlib、Scikit-learn等）",
              "跨平台兼容：同一份代码可在 Windows、macOS、Linux 上无缝运行",
              "多范式支持：支持面向过程、面向对象、函数式编程，灵活适配不同场景",
              "活跃的社区：全球数百万开发者，遇到问题几乎都能找到现成解决方案"
            ]
          },
          {
            "type": "code",
            "code": "# 你的第一个Python程序：Hello World\nprint('Hello, 商务数据分析!')\n\n# Python 代码不需要分号结尾\n# 注释用 # 开头，解释代码意图\n# 多行注释用三个引号包裹\n\"\"\"\n这是一个多行注释\n可以写多行说明文字\n\"\"\"",
            "lang": "python"
          },
          {
            "type": "list",
            "title": "开发环境搭建步骤",
            "items": [
              "1. 下载 Python：访问 python.org 下载最新版（推荐 3.10+），安装时勾选【Add Python to PATH】",
              "2. 验证安装：打开终端输入 python --version，看到版本号说明安装成功",
              "3. pip 包管理器：Python 自带 pip，用 pip install 包名 安装第三方库",
              "4. 推荐编辑器：VS Code（免费轻量）+ Python 扩展插件；PyCharm（功能强大的专业IDE）；Jupyter Notebook（适合数据分析的交互式环境）",
              "5. 虚拟环境：python -m venv myenv 创建隔离环境，避免包版本冲突",
              "6. 运行方式：命令行 python hello.py；IDE中按运行按钮；Jupyter 中按 Shift+Enter"
            ]
          },
          {
            "type": "code",
            "code": "# 验证环境：在终端运行以下命令\n# python --version        # 查看 Python 版本\n# pip --version           # 查看 pip 版本\n# pip install pandas      # 安装数据分析必备库\n\n# 测试安装是否成功\nimport sys\nprint(f'Python 版本: {sys.version}')\nprint(f'Python 路径: {sys.executable}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第2章 变量与基本数据类型",
        "summary": "本章重点：理解变量的本质（内存引用），掌握6种基本数据类型，熟练使用 type() 和类型转换。",
        "content": [
          {
            "type": "text",
            "text": "变量是存储数据的容器。在 Python 中，变量不需要声明类型——解释器会根据赋值自动推断。可以把变量理解为贴有标签的盒子：标签是变量名，盒子里装的是数据。Python 中一切皆对象，每个对象都有类型（type）、值（value）和身份（id）。"
          },
          {
            "type": "list",
            "title": "Python 六大基本数据类型",
            "items": [
              "整数 int：任意大小的整数，如 age = 21。Python 3 的 int 没有大小限制（只受内存限制）",
              "浮点数 float：带小数点的数，如 price = 19.99。内部使用 IEEE 754 双精度（64位），存在精度问题（如 0.1 + 0.2 != 0.3）",
              "字符串 str：文本数据，用单引号或双引号包裹，如 name = '徐晓帆'。支持索引、切片、格式化等丰富操作",
              "布尔值 bool：只有 True 和 False 两个值，用于逻辑判断。注意首字母必须大写",
              "空值 NoneType：None 表示'没有值'或'未知'，是 NoneType 类型的唯一值",
              "复数 complex：形如 3+4j，在科学计算中偶尔用到"
            ]
          },
          {
            "type": "code",
            "code": "# 变量赋值与类型查看\nname = '徐晓帆'        # str 字符串\nage = 21               # int 整数\nscore = 95.5           # float 浮点数\nis_passed = True       # bool 布尔\nnothing = None         # NoneType 空值\n\n# 使用 type() 查看变量类型\nprint(type(name))      # <class 'str'>\nprint(type(age))       # <class 'int'>\nprint(type(score))     # <class 'float'>\nprint(type(is_passed)) # <class 'bool'>\nprint(type(nothing))   # <class 'NoneType'>\n\n# 使用 id() 查看内存地址\nprint(f'name 的内存地址: {id(name)}')",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# 类型转换（重要！数据处理必备）\n# str -> int\nnum_str = '123'\nnum_int = int(num_str)      # 123\n\n# str -> float\nprice_str = '19.99'\nprice = float(price_str)    # 19.99\n\n# int -> str\ncount = 100\ncount_str = str(count)      # '100'\n\n# 注意：无法转换的字符串会抛出 ValueError\n# int('abc')  # ValueError: invalid literal\n\n# 常用：安全转换\nvalue = '12.5'\ntry:\n    result = float(value)\n    print(f'转换成功: {result}')\nexcept ValueError:\n    print(f'无法将 \"{value}\" 转换为数字')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第3章 运算符与表达式",
        "summary": "本章重点：掌握算术/比较/逻辑/赋值/成员五大类运算符，理解运算符优先级，会用 // 和 % 做实际计算。",
        "content": [
          {
            "type": "text",
            "text": "运算符是构建程序逻辑的基础。Python 提供了丰富的运算符来执行数学计算、值比较、逻辑判断等操作。理解运算符的优先级（例如乘除优先于加减）是写出正确代码的前提——不确定时可以用括号明确表达式。"
          },
          {
            "type": "list",
            "title": "五大类运算符详解",
            "items": [
              "算术运算符：+（加）-（减）*（乘）/（除，结果总是 float）//（整除/地板除，舍去小数）%（取余/模运算）**（幂运算，如 2**3=8）",
              "比较运算符：==（等于）!=（不等于）> < >= <=，返回 bool 值。注意 == 是比较，= 是赋值，两者不能混淆",
              "逻辑运算符：and（与，全True才True）、or（或，有True就True）、not（非，取反）。支持短路求值——如果左侧已经能确定结果，右侧不会执行",
              "赋值运算符：= += -= *= /= //= %= **=。x += 5 等价于 x = x + 5",
              "成员运算符：in / not in。判断元素是否在序列（字符串、列表、元组、字典、集合）中"
            ]
          },
          {
            "type": "code",
            "code": "# 运算符实战示例\nx, y = 10, 3\n\n# 算术运算\nprint(f'x + y = {x + y}')   # 13\nprint(f'x - y = {x - y}')   # 7\nprint(f'x * y = {x * y}')   # 30\nprint(f'x / y = {x / y}')   # 3.333...(总是浮点数)\nprint(f'x // y = {x // y}')  # 3（整除，舍去小数）\nprint(f'x % y = {x % y}')   # 1（取余数）\nprint(f'x ** y = {x ** y}') # 1000（10的3次方）",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# 比较和逻辑运算\nage = 21\nscore = 88\n\n# 比较运算\nprint(age >= 18)           # True（是否成年）\nprint(score == 100)        # False（是否满分）\nprint(score != 60)         # True（不等于60）\n\n# 逻辑运算（组合多个条件）\nis_adult = age >= 18\nis_excellent = score >= 90\nis_passing = score >= 60\n\nprint(is_adult and is_excellent)  # False（成年且优秀）\nprint(is_adult or is_excellent)   # True（成年或优秀）\nprint(not is_excellent)           # True（不是优秀）\nprint(is_adult and is_passing)    # True（成年且及格）",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# in 成员运算符（数据分析中非常常用）\n# 检查字符串中是否包含子串\ntext = '商务数据分析与应用'\nprint('数据' in text)      # True\nprint('Python' in text)    # False\n\n# 检查列表中是否包含元素\ncities = ['北京', '上海', '广州', '深圳']\nprint('上海' in cities)    # True\nprint('杭州' not in cities) # True\n\n# 检查字典中是否有某个键\nstudent = {'name': '徐晓帆', 'age': 21}\nprint('name' in student)   # True\nprint('score' in student)  # False",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第4章 字符串操作",
        "summary": "本章重点：掌握字符串的索引/切片、常用方法（strip/split/replace/find）、f-string格式化、字符串与列表的相互转换。字符串操作是数据清洗的基础。",
        "content": [
          {
            "type": "text",
            "text": "字符串是 Python 中最常用的数据类型，数据清洗工作的 80% 都在处理字符串。Python 提供了极其丰富的字符串处理方法。尤其对于数据分析师来说，处理来自 Excel、CSV、数据库的文本数据时，字符串操作是不可或缺的技能。"
          },
          {
            "type": "list",
            "title": "字符串核心操作",
            "items": [
              "索引访问：s[0] 取第一个字符，s[-1] 取最后一个字符。索引从 0 开始",
              "切片：s[start:end:step] 提取子串。s[1:5] 取索引 1-4；s[::-1] 反转字符串",
              "大小写转换：s.upper() 全大写、s.lower() 全小写、s.title() 首字母大写",
              "空白处理：s.strip() 去首尾空白、s.lstrip() 去左侧、s.rstrip() 去右侧",
              "查找替换：s.find(sub) 找子串位置（找不到返回-1）、s.replace(old, new) 替换",
              "拆分合并：s.split(sep) 按分隔符拆成列表、'sep'.join(list) 用分隔符合并列表",
              "判断方法：s.startswith(prefix)、s.endswith(suffix)、s.isdigit()、s.isalpha()",
              "f-string 格式化：f'{变量:格式}' 是 Python 3.6+ 最推荐的字符串格式化方式"
            ]
          },
          {
            "type": "code",
            "code": "# 字符串索引与切片\nname = '商务数据分析'\nprint(name[0])      # '商'（第一个字符）\nprint(name[-1])     # '析'（最后一个字符）\nprint(name[2:4])    # '数据'（索引2到3）\nprint(name[:2])     # '商务'（从头到索引1）\nprint(name[2:])     # '数据分析'（从索引2到末尾）\n\n# 常用技巧：反转字符串\nprint(name[::-1])   # '析分数据商'",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# 数据清洗中常用的字符串方法\n# 模拟从Excel/CSV读取的原始文本\ntext = '  徐晓帆  '\ncity = 'Shanghai'\nemail = 'user@example.com'\n\n# 1. 去除首尾空格（数据清洗第一步）\nclean = text.strip()           # '徐晓帆'\n\n# 2. 大小写统一\nprint(city.lower())            # 'shanghai'\nprint(city.upper())            # 'SHANGHAI'\n\n# 3. 替换文本\nnew_text = clean.replace('晓帆', '同学')  # '徐同学'\n\n# 4. 拆分与合并\ndata = '苹果,香蕉,橙子,葡萄'\nfruits = data.split(',')       # ['苹果', '香蕉', '橙子', '葡萄']\nresult = ' | '.join(fruits)    # '苹果 | 香蕉 | 橙子 | 葡萄'\n\n# 5. 查找子串\nprint(email.find('@'))         # 4（@的位置）\nprint(email.startswith('user')) # True",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# f-string 格式化（最推荐的方式）\nname = '徐晓帆'\nscore = 95.5666\nrate = 0.856\n\n# 基本用法\nprint(f'{name}的成绩是{score}分')\n\n# 格式控制：.2f 保留2位小数，.1% 百分比格式\nprint(f'成绩：{score:.2f}分')              # 95.57分\nprint(f'完成率：{rate:.1%}')               # 85.6%\n\n# 对齐与填充\nprint(f'|{name:<10}|')   # 左对齐，占10位  |徐晓帆      |\nprint(f'|{name:>10}|')   # 右对齐，占10位  |        徐晓帆|\nprint(f'|{name:^10}|')   # 居中对齐         |   徐晓帆   |\n\n# 千分位格式\namount = 1234567\nprint(f'金额：{amount:,}元')                # 1,234,567元",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第5章 列表与元组",
        "summary": "本章重点：列表的增删改查、切片操作、列表推导式（Python最强大的特性之一）、元组的不可变性及其应用场景。列表是数据分析中最常用的数据结构。",
        "content": [
          {
            "type": "text",
            "text": "列表（list）是 Python 中最灵活、最常用的数据结构——用方括号 [] 定义，可以存放任意类型的数据。元组（tuple）用圆括号 () 定义，创建后不可修改（不可变）。在数据分析中，列表常用于存储一列数据、迭代处理结果、构建复杂数据结构。"
          },
          {
            "type": "list",
            "title": "列表核心操作大全",
            "items": [
              "创建：[] 空列表、[1,2,3] 含元素列表、list(range(10)) 从可迭代对象创建",
              "索引访问：nums[0] 第一个、nums[-1] 最后一个、nums[1:4] 切片",
              "添加元素：append(x) 末尾追加、insert(i,x) 在位置i插入、extend(list) 合并另一个列表",
              "删除元素：pop() 删除末尾并返回、pop(i) 删除位置i、remove(x) 删除第一个值为x的元素、del nums[i] 直接删除",
              "查找统计：index(x) 查找位置、count(x) 统计出现次数、len(list) 长度",
              "排序：sort() 原地排序、sorted(list) 返回新列表、reverse=True 降序",
              "列表推导式：[表达式 for 变量 in 可迭代对象 if 条件] — Python 最强大的语法糖之一"
            ]
          },
          {
            "type": "code",
            "code": "# 列表基本操作\nsales = [120, 340, 280, 410, 390]\n\n# 增删改查\nsales.append(450)           # 末尾添加 450\nsales.insert(0, 100)        # 在开头插入 100\nprint(f'插入后: {sales}')\n\nsales.remove(280)           # 删除值为 280 的元素\nlast = sales.pop()          # 弹出最后一个\nprint(f'弹出: {last}, 剩余: {sales}')\n\n# 排序\nsales_sorted = sorted(sales)           # 升序\nsales_desc = sorted(sales, reverse=True) # 降序\nprint(f'升序: {sales_sorted}')\nprint(f'降序: {sales_desc}')\n\n# 常用统计\nprint(f'总和: {sum(sales)}')\nprint(f'均值: {sum(sales)/len(sales):.1f}')\nprint(f'最高: {max(sales)}, 最低: {min(sales)}')",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# 列表推导式（核心技能！）\n# 基本语法：[表达式 for 变量 in 可迭代对象 if 条件]\n\nsales = [120, 340, 280, 410, 390, 560, 230]\n\n# 1. 筛选：找出销售额 > 300 的记录\nhigh_sales = [s for s in sales if s > 300]\nprint(f'高销售额: {high_sales}')  # [340, 410, 390, 560]\n\n# 2. 转换：所有销售额打9折\ndiscounted = [s * 0.9 for s in sales]\nprint(f'打折后: {discounted}')\n\n# 3. 筛选+转换：高销售额的1.2倍\nbonus = [s * 1.2 for s in sales if s > 300]\nprint(f'奖金计算: {bonus}')\n\n# 4. if-else 推导式（条件在表达式部分）\nlabels = ['高' if s > 300 else '低' for s in sales]\nprint(f'标签: {labels}')\n\n# 5. 嵌套推导式：展平二维列表\nmatrix = [[1,2,3], [4,5,6], [7,8,9]]\nflat = [x for row in matrix for x in row]\nprint(f'展平: {flat}')  # [1,2,3,4,5,6,7,8,9]",
            "lang": "python"
          },
          {
            "type": "list",
            "title": "元组（Tuple）要点",
            "items": [
              "定义：t = (1, 2, 3) 或 t = 1, 2, 3（括号可省略）",
              "单元素元组：t = (1,) 注意逗号不能省略，否则 t 是整数而不是元组",
              "不可变：元组创建后不能增删改，但元组内部的可变元素（如列表）可以修改",
              "应用场景：函数返回多个值（return a, b 实际返回元组）、字典的键（不可变所以可哈希）、数据保护（不希望被修改的数据）",
              "拆包：a, b, c = (1, 2, 3) 同时赋值给多个变量"
            ]
          }
        ]
      },
      {
        "title": "第6章 字典与集合",
        "summary": "本章重点：字典的增删改查、遍历方法（items/keys/values）、字典推导式、集合的去重与运算。字典是数据分析的'灵魂数据结构'。",
        "content": [
          {
            "type": "text",
            "text": "字典（dict）是 Python 中最重要、最强大的数据结构之一——以键值对（key-value）方式存储数据，查询速度极快（O(1)时间复杂度）。在数据分析中，字典常用于存储配置、缓存结果、构建映射关系、JSON 数据解析等。集合（set）用于去重和集合运算。"
          },
          {
            "type": "list",
            "title": "字典核心操作",
            "items": [
              "创建：d = {'name': '徐晓帆', 'age': 21} 或 d = dict(name='徐晓帆', age=21)",
              "访问：d['key'] 直接访问（键不存在报错）；d.get('key', '默认值') 安全访问（推荐）",
              "增/改：d['new_key'] = value；d.update({k1:v1, k2:v2}) 批量更新",
              "删除：d.pop('key') 删除并返回值；del d['key'] 直接删除；d.clear() 清空",
              "遍历：for k, v in d.items() 最常用；for k in d.keys()；for v in d.values()",
              "字典推导式：{k: v for k, v in d.items() if 条件} 快速构建/过滤字典",
              "合并字典：{**d1, **d2}（Python 3.5+）两个字典合并，重复键以后者为准"
            ]
          },
          {
            "type": "code",
            "code": "# 字典在数据分析中的实战应用\n# 模拟：存储学生各科成绩\nstudent = {\n    'name': '徐晓帆',\n    'python': 92,\n    'pandas': 88,\n    'sql': 95,\n    'math': 78\n}\n\n# 安全访问\nprint(student.get('machine_learning', '未选修'))  # 未选修（不会报错）\n\n# 遍历字典\nfor subject, score in student.items():\n    if subject != 'name':\n        level = '优秀' if score >= 90 else '良好' if score >= 80 else '需提高'\n        print(f'{subject}: {score}分 ({level})')\n\n# 字典推导式：筛选及格的科目\nscores_only = {k: v for k, v in student.items() if k != 'name'}\npassed = {k: v for k, v in scores_only.items() if v >= 80}\nprint(f'及格的科目: {passed}')",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# 字典的高级应用\nsales_data = {\n    '上海': {'Q1': 1200, 'Q2': 1500, 'Q3': 1800, 'Q4': 2000},\n    '北京': {'Q1': 800,  'Q2': 1000, 'Q3': 1200, 'Q4': 1500},\n    '广州': {'Q1': 600,  'Q2': 700,  'Q3': 900,  'Q4': 1100}\n}\n\n# 计算各城市年销售额\nfor city, quarters in sales_data.items():\n    total = sum(quarters.values())\n    print(f'{city} 年销售额: {total} 万元')\n\n# 找出销售额最高的季度\nall_q = {}\nfor city, quarters in sales_data.items():\n    for q, amt in quarters.items():\n        all_q[f'{city}-{q}'] = amt\nbest = max(all_q, key=all_q.get)\nprint(f'最高销售额: {best} = {all_q[best]}万元')",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# 集合（Set）的去重与运算\n# 创建集合：自动去重\norders_A = {'商品1', '商品2', '商品3', '商品4'}\norders_B = {'商品3', '商品4', '商品5', '商品6'}\n\n# 集合运算\nprint(f'A∩B（共同购买）: {orders_A & orders_B}')     # 交集\nprint(f'A∪B（所有商品）: {orders_A | orders_B}')     # 并集\nprint(f'A-B（仅A买过）: {orders_A - orders_B}')     # 差集\nprint(f'A⊕B（互斥商品）: {orders_A ^ orders_B}')    # 对称差集",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第7章 条件判断与循环",
        "summary": "本章重点：if-elif-else多分支、for循环遍历技巧（range/enumerate/zip）、while循环、break/continue控制。这些是程序逻辑的核心。",
        "content": [
          {
            "type": "text",
            "text": "条件判断和循环是编程的两大控制结构——条件判断让程序'做选择'，循环让程序'重复做'。在数据分析中，循环常用于遍历数据集、批量处理文件、迭代计算等场景。"
          },
          {
            "type": "list",
            "title": "控制流核心技巧",
            "items": [
              "if-elif-else：多分支条件判断，elif 可以有多个，else 是可选的。判断条件可以是任意返回 bool 的表达式",
              "for 循环：遍历任何可迭代对象（列表、字典、字符串、range、文件等）",
              "range(start, stop, step)：生成整数序列，常用于控制循环次数。range(5) = 0,1,2,3,4",
              "enumerate(iterable)：同时获取索引和元素，写法：for i, item in enumerate(list)",
              "zip(list1, list2)：并行遍历多个列表，写法：for a, b in zip(list_a, list_b)",
              "while 循环：条件为真时一直执行。注意！必须有退出条件，否则死循环",
              "break：立即跳出整个循环；continue：跳过本次迭代，进入下一次"
            ]
          },
          {
            "type": "code",
            "code": "# 条件判断 + for 循环实战\nscores = [85, 72, 90, 68, 95, 55, 88]\n\n# 1. 统计各等级人数\npassed = 0\nexcellent = 0\nfailed = 0\n\nfor i, s in enumerate(scores):\n    if s >= 90:\n        excellent += 1\n        level = '优秀'\n    elif s >= 60:\n        passed += 1\n        level = '及格'\n    else:\n        failed += 1\n        level = '不及格'\n    print(f'第{i+1}位学生: {s}分 ({level})')\n\nprint(f'\\n优秀: {excellent}, 及格: {passed}, 不及格: {failed}')\nprint(f'及格率: {(passed + excellent) / len(scores) * 100:.1f}%')",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# enumerate 和 zip 的实战用法\ncities = ['上海', '北京', '广州', '深圳']\nsales = [1200, 800, 900, 1100]\n\n# enumerate：同时获取索引和值\nprint('=== 排名 ===')\nfor rank, (city, amount) in enumerate(zip(cities, sales), start=1):\n    print(f'第{rank}名: {city} - {amount}万元')\n\n# 配合条件：只处理销售额 > 1000 的城市\nprint('\\n=== 销售额 > 1000 的城市 ===')\nfor city, amount in zip(cities, sales):\n    if amount > 1000:\n        print(f'{city}: {amount}万元 ★')",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# while 循环：不确定次数时使用\n# 示例：计算需要多少年让销售额翻倍\nyearly_sales = 1000  # 起始销售额（万元）\ntarget = 2000        # 目标\nrate = 0.15          # 年增长率 15%\nyears = 0\n\nwhile yearly_sales < target:\n    yearly_sales *= (1 + rate)\n    years += 1\n    print(f'第{years}年: {yearly_sales:.1f}万元')\n\nprint(f'\\n{years}年后销售额超过 {target}万元')\n\n# ⚠️ 注意：while 循环必须有退出条件，否则死循环！\n# 安全写法：加最大迭代次数\n# while yearly_sales < target and years < 100:",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第8章 函数与模块",
        "summary": "本章重点：函数定义与调用、参数类型（位置/默认/关键字）、lambda匿名函数、模块的导入方式、常用标准库。函数是代码复用的基础。",
        "content": [
          {
            "type": "text",
            "text": "函数（Function）将一段可重用的代码封装为一个整体，是编程中最基本也是最重要的抽象机制。好的函数应该'只做一件事，并且做好'。模块（Module）则是将相关的函数、类、变量组织在一个 .py 文件中，便于管理和复用。"
          },
          {
            "type": "list",
            "title": "函数设计要点",
            "items": [
              "定义语法：def func_name(param1, param2='默认值'):",
              "参数类型：位置参数（必须按顺序传）、默认参数（可选）、关键字参数（指定名字传）、可变参数（*args 接收任意多个位置参数，**kwargs 接收任意多个关键字参数）",
              "返回值：return 返回结果，没有 return 或 return 不带值时返回 None。可返回多个值（实际是元组）",
              "文档字符串：函数内第一行用 \"\"\"...\"\"\" 写说明，可通过 help(func) 查看",
              "作用域：函数内变量是局部变量（local），外部的全局变量需要用 global 声明后才能修改",
              "lambda 函数：单行匿名函数，如 lambda x: x*2，常用于排序键、过滤条件等简单场景"
            ]
          },
          {
            "type": "code",
            "code": "# 定义数据分析常用函数\ndef calc_stats(data):\n    \"\"\"计算数据的基本统计量：均值、标准差、最大值、最小值\"\"\"\n    n = len(data)\n    mean = sum(data) / n\n    variance = sum((x - mean) ** 2 for x in data) / n\n    std = variance ** 0.5\n    return {\n        'count': n,\n        'mean': round(mean, 2),\n        'std': round(std, 2),\n        'max': max(data),\n        'min': min(data)\n    }\n\nsales = [120, 340, 280, 410, 390]\nstats = calc_stats(sales)\nprint(stats)\n# 通过 help 查看函数说明\n# help(calc_stats)",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# 函数参数的高级用法\n# 1. 默认参数\ndef greet(name, greeting='你好'):\n    return f'{greeting}，{name}！'\n\nprint(greet('徐晓帆'))              # 你好，徐晓帆！\nprint(greet('徐晓帆', '早上好'))    # 早上好，徐晓帆！\n\n# 2. 关键字参数（不按顺序传参）\ndef describe(name, age, city):\n    return f'{name}，{age}岁，来自{city}'\n\nprint(describe(age=21, city='上海', name='徐晓帆'))\n\n# 3. lambda 函数（常用于排序）\nstudents = [\n    {'name': 'A', 'score': 85},\n    {'name': 'B', 'score': 92},\n    {'name': 'C', 'score': 78}\n]\n# 按分数降序排序\nranked = sorted(students, key=lambda s: s['score'], reverse=True)\nprint(ranked)",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# 模块的导入方式\n# 方式1：导入整个模块\nimport math\nprint(math.sqrt(16))       # 4.0\nprint(math.pi)             # 3.14159...\n\n# 方式2：导入特定函数\nfrom datetime import datetime, timedelta\ntoday = datetime.now()\nprint(f'今天: {today.strftime(\"%Y-%m-%d\")}')\ntomorrow = today + timedelta(days=1)\nprint(f'明天: {tomorrow.strftime(\"%Y-%m-%d\")}')\n\n# 方式3：导入并起别名（数据分析标配）\nimport pandas as pd\nimport numpy as np\n\n# 常用标准库速查：\n# json - 处理JSON数据\n# csv - 读写CSV文件\n# os - 操作系统接口\n# random - 随机数\n# collections - 高级数据结构（Counter, defaultdict）",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第9章 文件操作与异常处理",
        "summary": "本章重点：文件的打开/读取/写入/关闭、with语句（推荐的文件操作方式）、常见文件格式处理（txt/csv/json）、try-except异常捕获。数据处理离不开文件读写。",
        "content": [
          {
            "type": "text",
            "text": "文件操作是数据处理流程的重要环节——从外部文件读取原始数据，处理后将结果写回文件。Python 提供了简单易用的文件操作接口。在实际项目中，数据往往存储在 CSV、JSON、Excel 等文件中，掌握文件读写是数据分析的基本功。"
          },
          {
            "type": "list",
            "title": "文件操作核心知识",
            "items": [
              "打开文件：f = open('文件名', '模式') — 模式：'r'读、'w'写（覆盖）、'a'追加、'rb'/'wb'二进制读/写",
              "with 语句（强烈推荐）：with open(...) as f: — 自动关闭文件，即使发生异常也不会资源泄漏",
              "读取：f.read() 读全部、f.readline() 读一行、f.readlines() 读所有行返回列表",
              "写入：f.write(str) 写字符串、f.writelines(list) 写多行",
              "CSV 文件：使用 csv 模块或 Pandas 的 pd.read_csv() / df.to_csv()",
              "JSON 文件：json.load(f) 读取、json.dump(obj, f, ensure_ascii=False) 写入（避免中文乱码）",
              "异常处理：try-except-else-finally。try 中放可能出错的代码，except 中处理异常"
            ]
          },
          {
            "type": "code",
            "code": "# 文件读写基础操作\n# 写入文件\nwith open('example.txt', 'w', encoding='utf-8') as f:\n    f.write('商务数据分析与应用\\n')\n    f.write('Python 学习笔记\\n')\n    f.write('第1行: 变量与数据类型\\n')\n\n# 读取文件\nwith open('example.txt', 'r', encoding='utf-8') as f:\n    content = f.read()          # 读取全部\n    print(content)\n\n# 按行读取\nwith open('example.txt', 'r', encoding='utf-8') as f:\n    for line in f:              # 逐行迭代（推荐，不占内存）\n        print(f'→ {line.strip()}')",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# CSV 文件读写（数据分析最常用）\nimport csv\n\n# 写入CSV\nwith open('sales.csv', 'w', newline='', encoding='utf-8-sig') as f:\n    writer = csv.writer(f)\n    writer.writerow(['城市', '销售额', '利润'])  # 写表头\n    writer.writerow(['上海', 1200, 300])\n    writer.writerow(['北京', 800, 200])\n    writer.writerow(['广州', 900, 250])\n\n# 读取CSV\nwith open('sales.csv', 'r', encoding='utf-8-sig') as f:\n    reader = csv.DictReader(f)   # 按字典读取（推荐）\n    for row in reader:\n        print(f\"{row['城市']}: 销售额{row['销售额']}万, 利润{row['利润']}万\")",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# 异常处理：让程序更健壮\ndef safe_divide(a, b):\n    \"\"\"安全的除法，处理除零和类型错误\"\"\"\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        print(f'错误：不能除以零！')\n        return None\n    except TypeError:\n        print(f'错误：{a} 和 {b} 类型不匹配')\n        return None\n    else:\n        print(f'计算成功：{a} / {b} = {result:.2f}')\n        return result\n    finally:\n        print('--- 计算完成 ---')\n\nprint(safe_divide(10, 2))    # 正常\nprint(safe_divide(10, 0))    # 除零异常\nprint(safe_divide(10, '2'))  # 类型异常",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第10章 面向对象编程入门",
        "summary": "本章重点：类与对象的概念、__init__构造方法、实例属性与方法、继承与多态。理解 OOP 有助于阅读和使用复杂的数据分析框架。",
        "content": [
          {
            "type": "text",
            "text": "面向对象编程（OOP）是 Python 的核心编程范式之一。虽然数据分析工作不要求深入掌握 OOP，但理解基本的类与对象概念，能帮助你更好地使用 Pandas DataFrame（它是一个类）、Scikit-learn 的模型（也是类）等复杂库。"
          },
          {
            "type": "list",
            "title": "OOP核心概念",
            "items": [
              "类（Class）：对象的蓝图/模板。定义 class ClassName:",
              "对象（Object/Instance）：类的具体实例。obj = ClassName()",
              "__init__ 方法：构造方法，创建对象时自动调用，用于初始化属性",
              "self：指向实例本身的引用，必须是方法的第一个参数",
              "实例属性：self.xxx = value，每个实例可以有不同的属性值",
              "继承：class Child(Parent): 子类自动获得父类的属性和方法，可重写扩展",
              "常见内置方法：__str__ 打印友好显示、__len__ 支持 len()、__getitem__ 支持 [] 索引"
            ]
          },
          {
            "type": "code",
            "code": "# 面向对象实战：数据分析报告类\nclass SalesReport:\n    \"\"\"销售数据分析报告\"\"\"\n    def __init__(self, name, data):\n        self.name = name        # 报告名称\n        self.data = data        # 销售额列表\n        self.total = sum(data)  # 自动计算总和\n\n    def summary(self):\n        \"\"\"生成摘要\"\"\"\n        avg = self.total / len(self.data)\n        return f'[{self.name}] 总计:{self.total} 均值:{avg:.1f} 最高:{max(self.data)}'\n\n    def filter_high(self, threshold):\n        \"\"\"筛选高销售额\"\"\"\n        return [x for x in self.data if x > threshold]\n\n# 使用类\nreport = SalesReport('2024年Q1销售', [120, 340, 280, 410, 390])\nprint(report.summary())\nprint(f'超过300的: {report.filter_high(300)}')",
            "lang": "python"
          }
        ]
      }
    ]
  },
  {
    "id": "data-analysis",
    "icon": "📊",
    "title": "数据分析技术",
    "desc": "掌握 NumPy 科学计算、Pandas 数据处理、数据清洗、分组聚合、数据可视化、统计分析、特征工程、聚类分析、时间序列等核心技术。",
    "chapters": [
      {
        "title": "第1章 NumPy 科学计算基础",
        "summary": "NumPy 是 Python 数据科学的技术基石。掌握 ndarray 数组的创建、索引、向量化运算和常用函数，理解为何 NumPy 比纯 Python 循环快100倍。",
        "content": [
          {
            "type": "text",
            "text": "NumPy（Numerical Python）是整个 Python 数据科学生态系统的基石。Pandas、Matplotlib、Scikit-learn 等库都构建在 NumPy 之上。NumPy 的核心是 ndarray（N-dimensional array）——一种高效的同构多维数组，所有元素类型相同、内存连续存储，因此能够利用 CPU 的向量化指令实现极快的批量运算。"
          },
          {
            "type": "list",
            "title": "NumPy 核心要点",
            "items": [
              "ndarray：N维数组，所有元素同一类型，内存连续存储。比 Python 列表快 10-100 倍",
              "创建数组：np.array([1,2,3])、np.zeros((3,4)) 全0、np.ones((2,3)) 全1、np.arange(0, 10, 2) 等差数列、np.linspace(0, 1, 100) 等间距",
              "数组属性：shape（形状）、dtype（数据类型）、ndim（维数）、size（元素总数）",
              "向量化运算：arr + 1、arr * 2 等运算自动应用到每个元素，无需写循环",
              "切片索引：arr[1:5]、arr[:, 0]（取第一列）、arr[arr > 5]（布尔索引）",
              "聚合函数：np.sum()、np.mean()、np.std()、np.median()、np.percentile()",
              "随机数：np.random.randn(100) 正态分布、np.random.randint(1, 100, 50) 均匀分布整数",
              "重塑：arr.reshape(2, 3) 改变形状、arr.flatten() 展平为一维"
            ]
          },
          {
            "type": "code",
            "code": "import numpy as np\n\n# 向量化运算 vs 普通循环（性能对比）\n# 计算：prices * quantities 的总和\nprices = np.array([12.5, 8.9, 15.0, 10.2, 7.5] * 200)  # 1000个元素\nquantities = np.array([100, 200, 150, 180, 300] * 200)\n\n# NumPy 向量化（极快）\nrevenue = np.sum(prices * quantities)\nprint(f'总销售额: {revenue:.2f} 元')\n\n# 对比：如果用纯Python循环\n# revenue = sum(p * q for p, q in zip(prices, quantities))\n# NumPy 方式比纯Python循环快 50-100 倍！",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# NumPy 数组的创建与操作\n# 1. 创建数组\narr1 = np.array([1, 2, 3, 4, 5])        # 从列表创建\narr2 = np.zeros((3, 4))                  # 3行4列全0矩阵\narr3 = np.arange(0, 100, 10)             # [0, 10, 20, ..., 90]\narr4 = np.random.randn(100)              # 100个标准正态分布随机数\n\n# 2. 数组属性\nprint(f'形状: {arr2.shape}')              # (3, 4)\nprint(f'数据类型: {arr2.dtype}')           # float64\nprint(f'维数: {arr2.ndim}')               # 2\n\n# 3. 统计函数\nprint(f'均值: {arr4.mean():.3f}')\nprint(f'标准差: {arr4.std():.3f}')\nprint(f'中位数: {np.median(arr4):.3f}')\nprint(f'上四分位数: {np.percentile(arr4, 75):.3f}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第2章 Pandas 数据结构入门",
        "summary": "Pandas 是 Python 数据分析的核心武器。掌握 Series 和 DataFrame 的创建、索引、筛选和基本操作，能处理 90% 的日常数据分析任务。",
        "content": [
          {
            "type": "text",
            "text": "Pandas 是 Python 生态中最强大、最受欢迎的数据分析库——如果说 NumPy 是'强化版的数学计算'，那 Pandas 就是'强化版的 Excel'。Pandas 提供了两种核心数据结构：Series（一维，带标签的数组）和 DataFrame（二维，带行列标签的表格）。DataFrame 是数据分析中最常用的数据结构——可以理解为 Python 中的 Excel 工作表。"
          },
          {
            "type": "list",
            "title": "Pandas 核心操作速查",
            "items": [
              "创建 DataFrame：pd.DataFrame(dict) 从字典创建、pd.read_csv('file.csv') 从文件读取",
              "数据预览：df.head(n) 前n行、df.tail(n) 后n行、df.info() 结构信息、df.describe() 统计摘要",
              "选择列：df['列名'] 返回 Series、df[['col1','col2']] 返回 DataFrame",
              "选择行：df.loc[行标签]（按标签）、df.iloc[行索引]（按位置）",
              "条件筛选：df[df['销售额'] > 1000]、df.query('销售额 > 1000')",
              "新增列：df['新列'] = ... 直接赋值、df.assign(新列=表达式)",
              "排序：df.sort_values('列名', ascending=False) 降序排列"
            ]
          },
          {
            "type": "code",
            "code": "import pandas as pd\n\n# 从零创建 DataFrame\ndata = {\n    '商品': ['A', 'B', 'C', 'D', 'E'],\n    '销量': [120, 340, 280, 410, 390],\n    '单价': [10, 15, 12, 8, 20],\n    '品类': ['食品', '服装', '食品', '服装', '日用品']\n}\ndf = pd.DataFrame(data)\n\n# 数据一览\nprint(df.head())          # 前5行\nprint(f'\\n形状: {df.shape}')      # (5, 4)\nprint(f'列名: {df.columns.tolist()}')\n\n# 添加计算列\ndf['销售额'] = df['销量'] * df['单价']\ndf['利润率'] = (df['销售额'] * 0.3).round(1)  # 假设利润率30%\n\n# 条件筛选\nhigh_sales = df[df['销售额'] > 3000]\nprint(f'\\n高销售额商品:\\n{high_sales}')",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# loc 与 iloc 详解\ndf = pd.DataFrame({\n    '城市': ['上海', '北京', '广州', '深圳'],\n    '销售额': [1200, 800, 900, 1100]\n}, index=['a', 'b', 'c', 'd'])\n\n# iloc：按位置索引（和Python列表一样）\nprint(df.iloc[0])          # 第1行\nprint(df.iloc[:2])         # 前2行\nprint(df.iloc[:, 1])       # 第2列\n\n# loc：按标签索引\nprint(df.loc['a'])         # 标签为'a'的行\nprint(df.loc[['a','c']])   # 标签为'a'和'c'的行\n\n# 条件筛选（最常用）\nhigh = df[df['销售额'] >= 1000]\nprint(f'高销售额城市:\\n{high}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第3章 数据清洗与预处理",
        "summary": "真实数据永远是脏的。掌握缺失值填充、重复值删除、异常值检测（IQR/Z-score）、数据类型转换等核心清洗方法。数据清洗占数据分析工作量的 60-80%。",
        "content": [
          {
            "type": "text",
            "text": "数据分析界有个共识：'数据清洗占整个分析工作量的 60%-80%'。真实世界的数据永远不是干净的——缺失值、重复值、异常值、格式不一致等问题几乎存在于每个数据集中。Pandas 提供了一套完整的工具来处理这些问题，掌握这些方法是成为合格数据分析师的必经之路。"
          },
          {
            "type": "list",
            "title": "数据清洗核心方法",
            "items": [
              "缺失值检测：df.isnull().sum() 统计每列缺失数、df.isnull().sum()/len(df)*100 缺失率",
              "缺失值处理策略：删除（缺失率>50%的列直接删）、均值/中位数填充（数值列）、众数填充（类别列）、向前/向后填充（时序数据）",
              "重复值处理：df.duplicated().sum() 检测、df.drop_duplicates(subset=['列名']) 删除指定列重复",
              "异常值检测——IQR法：Q1=25分位, Q3=75分位, IQR=Q3-Q1。异常值范围：< Q1-1.5*IQR 或 > Q3+1.5*IQR",
              "异常值检测——Z-score法：z = (x-mean)/std，通常 |z|>3 视为异常",
              "数据类型转换：pd.to_datetime() 转日期、pd.to_numeric(errors='coerce') 安全转数字",
              "字符串清洗：str.strip() 去空格、str.lower() 统一大小写、str.replace() 替换、str.extract() 正则提取"
            ]
          },
          {
            "type": "code",
            "code": "import pandas as pd\nimport numpy as np\n\n# 模拟脏数据\ndf = pd.DataFrame({\n    '姓名': ['张三', '李四', '王五', '张三', '赵六', None],\n    '价格': [10, np.nan, 15, 10, 1000, 12],  # 有缺失值和异常值\n    '数量': [5, 3, 7, 5, 2, None],\n    '日期': ['2024-01-01', '2024/02/01', 'invalid', '2024-01-01', '2024-03-01', '2024-04-01']\n})\nprint(f'原始数据:\\n{df}\\n')\n\n# 1. 重复值处理\nprint(f'重复行数: {df.duplicated().sum()}')\ndf = df.drop_duplicates(subset=['姓名', '价格'])\n\n# 2. 缺失值处理\ndf['价格'] = df['价格'].fillna(df['价格'].median())  # 中位数填充\ndf['数量'] = df['数量'].fillna(df['数量'].mean())    # 均值填充\ndf['姓名'] = df['姓名'].fillna('未知')\n\n# 3. 异常值处理（IQR法）\nQ1 = df['价格'].quantile(0.25)\nQ3 = df['价格'].quantile(0.75)\nIQR = Q3 - Q1\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\ndf = df[(df['价格'] >= lower) & (df['价格'] <= upper)]\n\nprint(f'清洗后:\\n{df}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第4章 数据聚合与分组",
        "summary": "groupby 是 Pandas 最强大的功能之一。掌握单列/多列分组、多种聚合函数、agg 多指标聚合、pivot_table 数据透视表、transform 保持形状的分组运算。",
        "content": [
          {
            "type": "text",
            "text": "数据分组聚合（Split-Apply-Combine）是数据分析中最常用的分析模式：先将数据按某个维度分成多个组（Split），再对每个组应用聚合函数（Apply），最后将结果合并（Combine）。这在 SQL 中是 GROUP BY，在 Excel 中是数据透视表，在 Pandas 中是 groupby——它是数据分析师的'瑞士军刀'。"
          },
          {
            "type": "list",
            "title": "groupby 进阶技巧",
            "items": [
              "基本分组：df.groupby('列名') 返回 GroupBy 对象，需调用聚合函数后才产生结果",
              "常用聚合：sum()/mean()/count()/max()/min()/std()/median()/nunique()",
              "多列聚合：df.groupby('city').agg({'sales':'sum', 'price':'mean'}) 不同列不同聚合方式",
              "多指标聚合：df.groupby('city').agg(total=('sales','sum'), avg=('price','mean'))",
              "多维度分组：df.groupby(['城市', '品类']) 按多个列分组，结果有多层索引",
              "transform：分组后保持原 DataFrame 形状，适合计算'组内排名'、'组内占比'等",
              "filter：根据组统计结果筛选整个组，如'保留销售额总和>1000的城市'",
              "apply：最灵活的分组方法，可对每组执行任意自定义函数"
            ]
          },
          {
            "type": "code",
            "code": "import pandas as pd\n\ndf = pd.DataFrame({\n    '城市': ['上海','北京','上海','北京','广州','上海','广州'],\n    '品类': ['食品','食品','服装','服装','食品','食品','服装'],\n    '月份': ['1月','1月','1月','2月','2月','2月','2月'],\n    '销售额': [1200, 800, 1500, 600, 900, 1100, 700]\n})\n\n# 1. 单维度分组：各城市总销售额\ncity_total = df.groupby('城市')['销售额'].sum().sort_values(ascending=False)\nprint(f'城市销售额排名:\\n{city_total}\\n')\n\n# 2. 多维度分组：城市+品类交叉分析\ncross = df.groupby(['城市', '品类'])['销售额'].agg(['sum', 'mean', 'count'])\ncross.columns = ['总销售额', '平均销售额', '订单数']\nprint(f'交叉分析:\\n{cross}\\n')\n\n# 3. 多指标聚合\nstats = df.groupby('城市').agg(\n    总销售额=('销售额', 'sum'),\n    平均单笔=('销售额', 'mean'),\n    订单数=('销售额', 'count')\n).round(1)\nprint(f'多指标统计:\\n{stats}')",
            "lang": "python"
          },
          {
            "type": "code",
            "code": "# 数据透视表（pivot_table）\n# 比 groupby 更直观的二维交叉表\npivot = df.pivot_table(\n    values='销售额',\n    index='城市',        # 行\n    columns='品类',       # 列\n    aggfunc='sum',        # 聚合方式\n    fill_value=0          # 空值填充\n)\nprint(f'数据透视表:\\n{pivot}')\n\n# 带边际汇总的透视表\npivot2 = df.pivot_table(\n    values='销售额',\n    index='城市',\n    columns='品类',\n    aggfunc='sum',\n    fill_value=0,\n    margins=True,           # 添加总计行列\n    margins_name='合计'\n)\nprint(f'\\n带合计的透视表:\\n{pivot2}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第5章 数据合并与连接",
        "summary": "掌握 DataFrame 合并的四种方式：concat（纵向/横向拼接）、merge（SQL式连接：inner/left/right/outer）、join（按索引连接）。多表关联是数据分析的基本操作。",
        "content": [
          {
            "type": "text",
            "text": "现实中的分析数据往往分散在多个表格中——订单表、客户表、产品表各在不同的文件里。数据合并（Merge）就是将不同来源的数据按某种关联键组合在一起，就像 SQL 中的 JOIN 操作。"
          },
          {
            "type": "code",
            "code": "import pandas as pd\n\n# 模拟：订单表和客户表\norders = pd.DataFrame({\n    '订单号': [1, 2, 3, 4, 5],\n    '客户ID': [101, 102, 103, 101, 104],\n    '金额': [120, 340, 280, 410, 500]\n})\ncustomers = pd.DataFrame({\n    '客户ID': [101, 102, 103],\n    '姓名': ['张三', '李四', '王五'],\n    '城市': ['上海', '北京', '广州']\n})\n\n# inner join：只保留匹配的行\ninner = orders.merge(customers, on='客户ID', how='inner')\nprint(f'内连接(inner):\\n{inner}\\n')\n\n# left join：保留左表所有行\nleft = orders.merge(customers, on='客户ID', how='left')\nprint(f'左连接(left):\\n{left}\\n')\n\n# outer join：保留所有（full outer join）\nouter = orders.merge(customers, on='客户ID', how='outer')\nprint(f'全外连接(outer):\\n{outer}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第6章 数据可视化",
        "summary": "掌握 Matplotlib 和 Seaborn 绘制专业图表：柱状图、折线图、散点图、箱线图、热力图。好的可视化胜过千言万语。",
        "content": [
          {
            "type": "text",
            "text": "数据可视化是将数据转换为图形的艺术和科学。一张好的图表能在几秒内传达表格数据需要几分钟才能传递的信息。Python 中主要有两个可视化库：Matplotlib（底层、灵活）和 Seaborn（基于 Matplotlib、更美观、更简单的统计图表）。"
          },
          {
            "type": "code",
            "code": "import matplotlib.pyplot as plt\nimport seaborn as sns\nimport pandas as pd\n\n# 设置中文字体\nplt.rcParams['font.sans-serif'] = ['SimHei', 'Microsoft YaHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 数据准备\ndf = pd.DataFrame({\n    '月': range(1, 13),\n    '销售额': [120, 135, 140, 155, 162, 170, 180, 175, 190, 200, 210, 230],\n    '利润': [20, 22, 25, 28, 30, 32, 35, 33, 38, 40, 42, 48]\n})\n\n# 折线图：趋势\nfig, axes = plt.subplots(1, 3, figsize=(15, 4))\n\naxes[0].plot(df['月'], df['销售额'], marker='o', color='#3b82f6', linewidth=2)\naxes[0].set_title('月度销售趋势'); axes[0].set_xlabel('月份'); axes[0].grid(True, alpha=0.3)\n\n# 柱状图：对比\naxes[1].bar(df['月'], df['利润'], color='#10b981')\naxes[1].set_title('月度利润'); axes[1].set_xlabel('月份')\n\n# 散点图：关系\naxes[2].scatter(df['销售额'], df['利润'], c='#f59e0b', s=100, edgecolors='white')\naxes[2].set_title('销售额vs利润'); axes[2].set_xlabel('销售额'); axes[2].set_ylabel('利润')\n\nplt.tight_layout()\nplt.show()",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第7章 统计分析基础",
        "summary": "掌握描述性统计、概率分布、相关性分析、A/B测试与假设检验的核心概念。统计是数据分析的理论根基。",
        "content": [
          {
            "type": "text",
            "text": "统计分析为数据分析提供了方法论基础。描述性统计帮助理解数据的基本特征，推断性统计帮助我们基于样本对总体做出推断。对于商务数据分析来说，A/B 测试和相关性分析是最常用的统计方法。"
          },
          {
            "type": "list",
            "title": "关键统计概念",
            "items": [
              "均值 vs 中位数：均值受极端值影响大，收入/价格等右偏分布用中位数更合理",
              "标准差：衡量数据的离散程度。正态分布下68%数据在 ±1σ 内，95%在 ±2σ 内",
              "皮尔逊相关系数：r ∈ [-1, 1]。r>0 正相关、r<0 负相关、r≈0 无线性关系。|r|>0.7 强相关",
              "A/B测试：随机分两组→施加不同处理→比较指标。核心指标：转化率提升 = (T-C)/C×100%",
              "p 值：在原假设为真的前提下，观察到当前结果的概率。p<0.05 通常认为'统计显著'"
            ]
          },
          {
            "type": "code",
            "code": "import numpy as np\nimport pandas as pd\n\n# 模拟A/B测试数据\nnp.random.seed(42)\nN = 1000\ncontrol = np.random.normal(100, 15, N)     # 对照组：均值100\ntreatment = np.random.normal(108, 15, N)    # 实验组：均值108\n\n# 描述性统计\nprint(f'对照组: 均值={control.mean():.1f}, 标准差={control.std():.1f}')\nprint(f'实验组: 均值={treatment.mean():.1f}, 标准差={treatment.std():.1f}')\n\n# 效果量（Lift）\nlift = (treatment.mean() - control.mean()) / control.mean() * 100\nprint(f'\\n提升幅度: {lift:.2f}%')\nprint(f'(实验组转化率 - 对照组转化率) / 对照组转化率 × 100%')\n\n# 相关性分析\ndf = pd.DataFrame({'广告投入': [10,20,30,40,50], '销售额': [100,150,200,250,320]})\ncorr = df['广告投入'].corr(df['销售额'])\nprint(f'\\n广告投入与销售额的相关系数: {corr:.3f}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第8章 特征工程",
        "summary": "特征工程是将原始数据转化为模型可用特征的过程。掌握数值特征处理、类别编码、日期特征提取、特征选择方法。好的特征比好的模型更重要。",
        "content": [
          {
            "type": "text",
            "text": "在机器学习领域有一句名言：'数据和特征决定了模型的上限，而模型和算法只是在逼近这个上限。'特征工程就是将原始数据转化为更适合机器学习模型使用的特征的过程。"
          },
          {
            "type": "code",
            "code": "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    '日期': pd.date_range('2024-01-01', periods=5),\n    '品类': ['食品', '服装', '食品', '服装', '食品'],\n    '金额': [120, 340, 280, 410, 390],\n    '数量': [2, 1, 3, 2, 4]\n})\n\n# 1. 日期特征提取\ndf['年份'] = df['日期'].dt.year\ndf['月份'] = df['日期'].dt.month\ndf['星期'] = df['日期'].dt.dayofweek\ndf['是否周末'] = (df['星期'] >= 5).astype(int)\n\n# 2. 类别特征编码\ncategory_dummies = pd.get_dummies(df['品类'], prefix='品类')\ndf = pd.concat([df, category_dummies], axis=1)\n\n# 3. 衍生特征\ndf['客单价'] = (df['金额'] / df['数量']).round(1)\n\nprint(df)",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第9章 聚类分析",
        "summary": "K-Means 是最常用的无监督学习算法。掌握数据标准化、K值选择（肘部法则）、聚类结果可视化和业务解读。广泛用于客户细分。",
        "content": [
          {
            "type": "code",
            "code": "from sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nimport numpy as np\n\n# 客户数据：年收入(万) 和 年消费(万)\ncustomers = np.array([\n    [20,5],[25,8],[30,10],[50,15],[55,18],\n    [60,20],[80,8],[90,10],[85,12]\n])\n\n# 标准化（聚类前必须做）\nscaler = StandardScaler()\ndata_scaled = scaler.fit_transform(customers)\n\n# K-Means聚类\nkmeans = KMeans(n_clusters=3, random_state=42, n_init=10)\nlabels = kmeans.fit_predict(data_scaled)\n\n# 结果\nfor i, (income, spend) in enumerate(customers):\n    cluster_type = ['高价值客户','潜力客户','低价值客户'][labels[i]]\n    print(f'客户{i+1}: 收入{income}万, 消费{spend}万 → {cluster_type}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第10章 时间序列分析",
        "summary": "掌握日期时间数据的处理、移动平均、趋势分解、季节性分析。供应链和销售分析中时间序列无处不在。",
        "content": [
          {
            "type": "code",
            "code": "import pandas as pd\nimport numpy as np\n\n# 生成时间序列数据\ndates = pd.date_range('2024-01-01', periods=365, freq='D')\nnp.random.seed(42)\ntrend = np.linspace(100, 200, 365)  # 上升趋势\nseasonal = 30 * np.sin(np.linspace(0, 4*np.pi, 365))  # 季节性\nnoise = np.random.normal(0, 10, 365)  # 随机噪声\nsales = trend + seasonal + noise\n\ndf = pd.DataFrame({'日期': dates, '销售额': sales})\ndf.set_index('日期', inplace=True)\n\n# 月度汇总\nmonthly = df.resample('ME')['销售额'].agg(['sum', 'mean', 'std']).round(1)\nprint(f'月度汇总:\\n{monthly}')\n\n# 移动平均（平滑波动）\ndf['MA7'] = df['销售额'].rolling(window=7).mean()\ndf['MA30'] = df['销售额'].rolling(window=30).mean()\nprint(f'\\n最新数据:\\n{df.tail()}')",
            "lang": "python"
          }
        ]
      }
    ]
  },
  {
    "id": "data-collection",
    "icon": "🔍",
    "title": "数据采集与处理",
    "desc": "学习数据源识别、多种数据格式读取（CSV/Excel/JSON/SQL）、数据加工转换、数据合并连接、数据质量评估、Web数据采集、数据导出等全流程技能。",
    "chapters": [
      {
        "title": "第1章 数据源类型与识别",
        "summary": "了解结构化/半结构化/非结构化数据的区别，掌握常见数据源的获取方式和适用场景。",
        "content": [
          {
            "type": "list",
            "title": "数据源分类",
            "items": [
              "结构化数据：行列固定，如数据库表、CSV、Excel。最易处理，Pandas 直接读取",
              "半结构化数据：有标签标记但结构灵活，如JSON、XML、HTML。需要解析提取",
              "非结构化数据：无预定义结构，如文本、图片、视频、日志。需专门方法处理",
              "API数据：通过HTTP请求获取，如电商API、天气API。用 requests 库调用",
              "Web数据：通过爬虫从网页提取。用 BeautifulSoup/Scrapy 框架",
              "企业系统数据：ERP(SAP)、CRM(Salesforce)、SCM系统导出"
            ]
          }
        ]
      },
      {
        "title": "第2章 多格式数据读取",
        "summary": "掌握 pd.read_csv/excel/json/sql 的参数用法，处理编码问题、大文件分块读取等实战技巧。",
        "content": [
          {
            "type": "code",
            "code": "import pandas as pd\n\n# 1. 读取CSV（最常用）\n# encoding: utf-8, gbk, utf-8-sig(Excel兼容)\n# sep: 分隔符，默认逗号，可能是\\t或|\ndf_csv = pd.read_csv('sales.csv', \n    encoding='utf-8-sig',   # 中文推荐\n    sep=',',                 # 分隔符\n    skiprows=0,              # 跳过开头几行\n    na_values=['NA', '']     # 将这些值视为NaN\n)\n\n# 2. 读取Excel\n# sheet_name: 指定工作表名或索引\n# usecols: 只读取特定列\ndf_excel = pd.read_excel('report.xlsx',\n    sheet_name='Sheet1',\n    usecols=['城市', '销售额'],\n    skiprows=1               # 跳过标题行\n)\n\n# 3. 读取JSON\ndf_json = pd.read_json('data.json', orient='records')\n\n# 4. 大文件分块读取（内存不足时）\n# for chunk in pd.read_csv('big.csv', chunksize=10000):\n#     process(chunk)",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第3章 数据加工与转换",
        "summary": "掌握列的增删改、条件筛选、排序、分组、类型转换、数据抽样等核心加工操作。",
        "content": [
          {
            "type": "code",
            "code": "import pandas as pd\n\ndf = pd.DataFrame({\n    '商品': ['A','B','C','D','E'],\n    '销售': [120, 340, 280, 410, 390],\n    '成本': [80, 200, 180, 280, 250],\n    '日期': ['2024-01','2024-02','2024-01','2024-03','2024-02']\n})\n\n# 1. 新增列\ndf['利润'] = df['销售'] - df['成本']\ndf['利润率'] = (df['利润'] / df['销售'] * 100).round(1)\n\n# 2. 筛选\ndf_high = df.query('利润 > 100 and 利润率 > 30')\n\n# 3. 排序\ndf_sorted = df.sort_values('利润', ascending=False)\n\n# 4. 数据抽样\ndf_sample = df.sample(n=3, random_state=42)\n\nprint(df[['商品','利润率','利润']])",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第4章 数据合并与连接",
        "summary": "类似课程2的第5章，但更侧重大规模数据处理、多表关联的性能优化技巧。",
        "content": [
          {
            "type": "code",
            "code": "import pandas as pd\n\norders = pd.DataFrame({'订单号':[1,2,3,4], '客户ID':[101,102,103,101], '金额':[120,340,280,410]})\ncustomers = pd.DataFrame({'客户ID':[101,102,103], '姓名':['张三','李四','王五'], '城市':['上海','北京','广州']})\n\n# 左连接\nresult = orders.merge(customers, on='客户ID', how='left')\nprint(result)\n\n# concat拼接\ndf1 = pd.DataFrame({'A':[1,2], 'B':[3,4]})\ndf2 = pd.DataFrame({'A':[5,6], 'B':[7,8]})\ncombined = pd.concat([df1, df2], ignore_index=True)\nprint(combined)",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第5章 数据质量评估与清洗",
        "summary": "建立数据质量检查清单，制定清洗策略，确保下游分析的数据可靠性。",
        "content": [
          {
            "type": "list",
            "title": "数据质量六维度",
            "items": [
              "完整性：缺失值比例，关键字段覆盖率应>95%",
              "准确性：值域检查（如年龄0-150）、格式检查（如邮箱格式）、业务规则检查",
              "一致性：同一数据在不同表/系统中应一致。如'上海市'='上海'",
              "唯一性：主键不应重复，每行代表唯一实体",
              "时效性：数据更新频率是否满足业务需求，是否存在过期数据",
              "有效性：数据是否符合预定义的域约束、枚举值范围等"
            ]
          }
        ]
      },
      {
        "title": "第6章 Web数据采集入门",
        "summary": "学习使用 requests + BeautifulSoup 从网页提取数据，了解爬虫的基本原理和反爬策略。",
        "content": [
          {
            "type": "code",
            "code": "# Web数据采集示例\nimport requests\nfrom bs4 import BeautifulSoup\n\n# 发送HTTP请求\nurl = 'https://example.com/products'\nheaders = {'User-Agent': 'Mozilla/5.0'}\nresponse = requests.get(url, headers=headers, timeout=10)\n\n# 解析HTML\nsoup = BeautifulSoup(response.text, 'html.parser')\n\n# 提取数据\nproducts = []\nfor item in soup.select('.product-item'):\n    name = item.select_one('.name').text.strip()\n    price = float(item.select_one('.price').text.replace('¥', ''))\n    products.append({'name': name, 'price': price})\n\ndf = pd.DataFrame(products)\nprint(f'采集到 {len(df)} 条数据')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第7章 数据导出与报告",
        "summary": "掌握 CSV/Excel/JSON 导出、多Sheet报表生成、带格式的 Excel 输出。",
        "content": [
          {
            "type": "code",
            "code": "import pandas as pd\n\ndf = pd.DataFrame({'城市':['上海','北京','广州'], '销售额':[1200,800,900]})\n\n# CSV导出\ndf.to_csv('report.csv', index=False, encoding='utf-8-sig')\n\n# Excel多Sheet导出\nwith pd.ExcelWriter('report.xlsx', engine='openpyxl') as writer:\n    df.to_excel(writer, sheet_name='销售汇总', index=False)\n    df.describe().to_excel(writer, sheet_name='统计描述')\n\nprint('报告已导出')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第8章 综合实战项目",
        "summary": "端到端完成一个完整的数据处理项目：多源数据读取→清洗→加工→合并→质检→导出。",
        "content": [
          {
            "type": "code",
            "code": "# 综合实战：完整数据处理流程\nimport pandas as pd\nimport numpy as np\n\n# Step 1: 读取数据\norders = pd.read_csv('orders.csv', encoding='utf-8-sig')\ncustomers = pd.read_excel('customers.xlsx')\n\n# Step 2: 清洗\norders['金额'] = orders['金额'].fillna(orders['金额'].median())\norders = orders.drop_duplicates()\n\n# Step 3: 合并\ndf = orders.merge(customers, on='客户ID', how='left')\n\n# Step 4: 加工\ndf['利润率'] = ((df['金额'] - df['金额'] * 0.7) / df['金额'] * 100).round(1)\n\n# Step 5: 质量检查\nassert df.isnull().sum().sum() == 0, '存在缺失值！'\nprint(f'处理完成: {len(df)}行, 缺失值: {df.isnull().sum().sum()}')\n\n# Step 6: 导出\ndf.to_csv('final_report.csv', index=False, encoding='utf-8-sig')\nprint('最终报告已导出！')",
            "lang": "python"
          }
        ]
      }
    ]
  },
  {
    "id": "supply-chain",
    "icon": "🚚",
    "title": "供应链数据分析",
    "desc": "结合供应链业务场景，深入学习指标体系、库存分析、物流成本、关联分析、客户细分、销售预测、供应商评估等实用分析技能。",
    "chapters": [
      {
        "title": "第1章 供应链核心指标体系",
        "summary": "掌握供应链管理的关键KPI：库存周转率、准时交付率、物流成本率、缺货率等指标的定义、计算公式和分析方法。",
        "content": [
          {
            "type": "list",
            "title": "供应链核心KPI",
            "items": [
              "库存周转率 = 销售成本 / 平均库存。衡量库存效率，越高说明商品流动越快",
              "准时交付率 = 准时订单数 / 总订单数 × 100%。目标>95%",
              "物流成本率 = 物流成本 / 营业收入 × 100%。行业通常5-15%",
              "缺货率 = 缺货次数 / 总需求次数 × 100%。越低越好",
              "完美订单率 = 准时 × 足量 × 无损坏的订单占比",
              "供应链总成本：采购+生产+物流+库存持有成本"
            ]
          },
          {
            "type": "code",
            "code": "import pandas as pd\n\n# 计算物流成本率\ndata = pd.DataFrame({\n    '月份': range(1, 7),\n    '营业收入': [120, 135, 140, 155, 162, 170],\n    '物流成本': [18, 19, 20, 21, 22, 23]\n})\ndata['物流成本率%'] = (data['物流成本'] / data['营业收入'] * 100).round(2)\nprint(data)\nprint(f'\\n平均物流成本率: {data[\"物流成本率%\"].mean():.2f}%')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第2章 库存数据分析",
        "summary": "学习ABC分类管理、安全库存计算、经济订货量(EOQ)模型，用数据优化库存决策。",
        "content": [
          {
            "type": "code",
            "code": "import pandas as pd\n\n# ABC分类：按销售额占比分类\nproducts = pd.DataFrame({\n    '商品': ['A','B','C','D','E','F','G','H'],\n    '销售额': [5000, 3000, 1200, 800, 500, 300, 150, 50]\n})\nproducts['占比%'] = (products['销售额'] / products['销售额'].sum() * 100).round(1)\nproducts['累计%'] = products['占比%'].cumsum()\nproducts['分类'] = pd.cut(products['累计%'], bins=[0,70,95,100], labels=['A','B','C'])\nprint(products)",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第3章 物流成本分析",
        "summary": "掌握物流成本结构、运输方式成本对比、仓储成本分析，找出成本优化空间。",
        "content": [
          {
            "type": "code",
            "code": "import pandas as pd\n\n# 各运输方式成本对比\nlogistics = pd.DataFrame({\n    '运输方式': ['公路', '铁路', '航空', '水运'],\n    '平均单价(元/吨公里)': [0.35, 0.15, 1.80, 0.08],\n    '平均时效(天)': [3, 7, 1, 15],\n    '适用场景': ['短途配送', '大宗长途', '紧急高价值', '大宗低价值']\n})\nprint(logistics)\n\n# 物流成本分析\norders = pd.DataFrame({\n    '订单': range(1, 6),\n    '重量(kg)': [100, 500, 200, 800, 300],\n    '距离(km)': [50, 300, 100, 500, 200]\n})\norders['吨公里'] = orders['重量(kg)'] / 1000 * orders['距离(km)']\norders['预估运费'] = orders['吨公里'] * 0.35  # 假设公路运输\nprint(f'\\n{orders}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第4章 市场购物篮分析",
        "summary": "学习关联规则挖掘：支持度、置信度、提升度三大指标，用 Apriori 算法发现商品间的购买关联。",
        "content": [
          {
            "type": "code",
            "code": "# 关联规则分析\nimport pandas as pd\nfrom itertools import combinations\n\n# 模拟交易数据\ntransactions = [\n    ['牛奶', '面包', '黄油'],\n    ['牛奶', '面包'],\n    ['牛奶', '黄油', '鸡蛋'],\n    ['面包', '黄油'],\n    ['牛奶', '面包', '黄油', '鸡蛋']\n]\n\n# 计算支持度\ndef calc_support(itemset):\n    count = sum(1 for t in transactions if set(itemset).issubset(set(t)))\n    return count / len(transactions)\n\n# 计算置信度\ndef calc_confidence(antecedent, consequent):\n    ab = antecedent + consequent\n    support_ab = calc_support(ab)\n    support_a = calc_support(antecedent)\n    return support_ab / support_a if support_a > 0 else 0\n\n# 计算提升度\ndef calc_lift(antecedent, consequent):\n    conf = calc_confidence(antecedent, consequent)\n    support_b = calc_support(consequent)\n    return conf / support_b if support_b > 0 else 0\n\n# 示例：牛奶 → 面包\nprint(f'支持度(牛奶,面包): {calc_support([\"牛奶\", \"面包\"]):.1%}')\nprint(f'置信度(牛奶→面包): {calc_confidence([\"牛奶\"], [\"面包\"]):.1%}')\nprint(f'提升度(牛奶→面包): {calc_lift([\"牛奶\"], [\"面包\"]):.2f}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第5章 客户细分与价值分析",
        "summary": "运用RFM模型对客户进行价值分层，识别高价值客户、潜力客户和流失风险客户。",
        "content": [
          {
            "type": "code",
            "code": "import pandas as pd\n\n# RFM模型实战\ndf = pd.DataFrame({\n    '客户': ['A','B','C','D','E','F'],\n    '最近购买(天)': [5, 30, 2, 60, 10, 90],\n    '购买频次': [20, 5, 30, 2, 15, 1],\n    '消费金额': [5000, 800, 8000, 300, 3000, 200]\n})\n\n# 按中位数打分\nr_median = df['最近购买(天)'].median()\nf_median = df['购买频次'].median()\nm_median = df['消费金额'].median()\n\ndf['R分'] = (df['最近购买(天)'] <= r_median).astype(int)  # 最近越好\ndf['F分'] = (df['购买频次'] >= f_median).astype(int)    # 越频繁越好\ndf['M分'] = (df['消费金额'] >= m_median).astype(int)    # 金额越高越好\ndf['RFM总分'] = df['R分'] + df['F分'] + df['M分']\n\n# 客户分层\ndef classify(score):\n    if score >= 3: return '高价值客户'\n    elif score >= 2: return '潜力客户'\n    else: return '低价值客户'\n\ndf['客户层级'] = df['RFM总分'].apply(classify)\nprint(df)",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第6章 销售预测",
        "summary": "掌握移动平均、指数平滑等经典预测方法，理解时间序列预测在供应链中的应用。",
        "content": [
          {
            "type": "code",
            "code": "import pandas as pd\nimport numpy as np\n\n# 销售数据\ndates = pd.date_range('2024-01-01', periods=12, freq='ME')\ndf = pd.DataFrame({'日期': dates, '实际销售': [120,135,140,155,162,170,180,175,190,200,210,230]})\n\n# 3期移动平均\ndf['MA3'] = df['实际销售'].rolling(3).mean()\n\n# 指数平滑\ndf['ES_0.3'] = df['实际销售'].ewm(alpha=0.3).mean()\ndf['ES_0.7'] = df['实际销售'].ewm(alpha=0.7).mean()\n\nprint(df[['日期','实际销售','MA3','ES_0.3']].round(1).tail(6))\nprint(f'\\nMAE(移动平均): {(df[\"实际销售\"] - df[\"MA3\"]).abs().mean():.1f}')",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第7章 供应商评估",
        "summary": "建立供应商综合评分模型：质量、交付、成本、服务四维度加权评分。",
        "content": [
          {
            "type": "code",
            "code": "import pandas as pd\n\n# 供应商评分\nsuppliers = pd.DataFrame({\n    '供应商': ['甲', '乙', '丙'],\n    '质量得分': [92, 85, 78],\n    '交付得分': [88, 90, 95],\n    '成本得分': [75, 85, 90],  # 得分越高越便宜\n    '服务得分': [85, 80, 70]\n})\n\n# 加权评分（权重总和=1）\nweights = {'质量得分': 0.35, '交付得分': 0.30, '成本得分': 0.20, '服务得分': 0.15}\nsuppliers['综合得分'] = sum(suppliers[w] * weight for w, weight in weights.items())\nranked = suppliers.sort_values('综合得分', ascending=False)\nprint(ranked[['供应商', '综合得分']])",
            "lang": "python"
          }
        ]
      },
      {
        "title": "第8章 供应链综合案例",
        "summary": "端到端分析项目：从物流成本、库存、客户三个维度综合评估供应链健康度。",
        "content": [
          {
            "type": "code",
            "code": "# 综合案例：供应链健康度评估\nimport pandas as pd\n\n# 数据整合\nlogistics = pd.DataFrame({'月':range(1,7), '物流成本':[18,19,20,21,22,23], '营收':[120,135,140,155,162,170]})\ninventory = pd.DataFrame({'月':range(1,7), '库存金额':[50,55,52,58,60,65], '销售成本':[80,90,95,100,108,115]})\n\n# 计算KPI\nlogistics['物流成本率'] = logistics['物流成本']/logistics['营收']*100\ninventory['库存周转率'] = inventory['销售成本']/inventory['库存金额']\n\n# 合并\nresult = logistics.merge(inventory, on='月')\nresult['健康评分'] = ((1 - result['物流成本率']/20)*50 + (result['库存周转率']/3)*50).round(1)\n\nprint(result[['月','物流成本率','库存周转率','健康评分']])\nprint(f'\\n综合健康度: {result[\"健康评分\"].mean():.1f}/100')",
            "lang": "python"
          }
        ]
      }
    ]
  }
];

// ==================== 章节练习题数据 ====================
var chapterExercises = {
  "python": {
    "0": [
      {
        "type": "single",
        "q": "Python 的创始人是？",
        "options": [
          "Guido van Rossum",
          "Dennis Ritchie",
          "James Gosling",
          "Brendan Eich"
        ],
        "answer": 0,
        "explain": "Python 由 Guido van Rossum 于 1991 年创建。Dennis Ritchie 创建了C语言，James Gosling 创建了Java，Brendan Eich 创建了JavaScript。"
      },
      {
        "type": "judge",
        "q": "Python 是编译型语言，必须先编译再运行。",
        "answer": false,
        "explain": "Python 是解释型语言，无需编译，直接运行。但Python内部会将代码编译为字节码(.pyc)。"
      },
      {
        "type": "single",
        "q": "以下哪个不是 Python 的特点？",
        "options": [
          "语法简洁",
          "跨平台",
          "需要手动管理内存",
          "丰富的第三方库"
        ],
        "answer": 2,
        "explain": "Python 自动管理内存（垃圾回收），不需要程序员手动分配和释放内存。"
      },
      {
        "type": "judge",
        "q": "pip 是 Python 的包管理工具，用于安装第三方库。",
        "answer": true,
        "explain": "pip install 包名 是最常用的安装方式。PyPI上已有超过40万个包。"
      }
    ],
    "1": [
      {
        "type": "single",
        "q": "以下哪个变量名是不合法的？",
        "options": [
          "_name",
          "name123",
          "2name",
          "name_2"
        ],
        "answer": 2,
        "explain": "变量名不能以数字开头。_name 以下划线开头是合法的（通常表示私有变量）。"
      },
      {
        "type": "single",
        "q": "type(3.14) 的输出是什么？",
        "options": [
          "<class 'int'>",
          "<class 'float'>",
          "<class 'str'>",
          "<class 'bool'>"
        ],
        "answer": 1,
        "explain": "带小数点的数字默认为 float 类型。3 才是 int。"
      },
      {
        "type": "judge",
        "q": "Python 中布尔值 True 和 False 的首字母可以小写。",
        "answer": false,
        "explain": "Python 的布尔值必须首字母大写：True 和 False，小写的 true/false 不是合法的布尔值。"
      },
      {
        "type": "fill",
        "q": "使用 _____ 函数可以查看一个变量的类型。",
        "answer": "type",
        "explain": "type(x) 返回变量x的类型，是调试和学习时非常常用的函数。"
      }
    ],
    "2": [
      {
        "type": "single",
        "q": "表达式 17 // 5 的结果是？",
        "options": [
          "3",
          "3.4",
          "2",
          "4"
        ],
        "answer": 0,
        "explain": "// 是整除（地板除），17//5=3（舍去小数部分）。/ 才是普通除法，结果为3.4。"
      },
      {
        "type": "single",
        "q": "以下哪个不是比较运算符？",
        "options": [
          "==",
          "!=",
          "=",
          ">="
        ],
        "answer": 2,
        "explain": "= 是赋值运算符，不是比较运算符。判断等于用 ==（两个等号）。"
      },
      {
        "type": "fill",
        "q": "Python 中，** 是 _____ 运算符。",
        "answer": "幂",
        "explain": "** 是幂运算，如 2**3 = 8，10**2 = 100。"
      },
      {
        "type": "judge",
        "q": "10 > 5 and 3 > 8 的运算结果是 True。",
        "answer": false,
        "explain": "and 要求两边都为 True。右边 3>8 是 False，所以整体结果是 False。"
      }
    ],
    "3": [
      {
        "type": "single",
        "q": "以下哪个方法可以去除字符串首尾空白？",
        "options": [
          "replace()",
          "strip()",
          "split()",
          "find()"
        ],
        "answer": 1,
        "explain": "strip()去除首尾空白（空格、制表符、换行符）。replace() 是替换，split() 是拆分，find() 是查找。"
      },
      {
        "type": "fill",
        "q": "使用 f'Hello {_____}' 可以在字符串中嵌入变量，这种写法叫做 _____。",
        "answer": "f-string",
        "explain": "f-string 是 Python 3.6+ 最推荐的字符串格式化方式，比 % 和 .format() 更简洁高效。"
      },
      {
        "type": "single",
        "q": "\"apple,banana,orange\".split(\",\") 的结果是？",
        "options": [
          "['apple','banana','orange']",
          "['apple,banana,orange']",
          "'apple','banana','orange'",
          "报错"
        ],
        "answer": 0,
        "explain": "split(',') 按逗号拆分为包含3个元素的列表。"
      }
    ],
    "4": [
      {
        "type": "single",
        "q": "以下哪个方法可以向列表末尾添加元素？",
        "options": [
          "add()",
          "insert()",
          "append()",
          "extend()"
        ],
        "answer": 2,
        "explain": "append()向末尾添加单个元素。extend()添加可迭代对象的每个元素。insert()在指定位置插入。"
      },
      {
        "type": "multi",
        "q": "以下哪些操作会修改原列表？（多选）",
        "options": [
          "list.sort()",
          "sorted(list)",
          "list.append(5)",
          "list.pop()"
        ],
        "answer": [
          0,
          2,
          3
        ],
        "explain": "sort()、append()、pop()都直接修改原列表。sorted()返回新列表，不修改原列表。"
      },
      {
        "type": "judge",
        "q": "元组创建后不能修改其元素。",
        "answer": true,
        "explain": "元组是不可变类型，创建后不能增删改。但如果元组内有列表等可变对象，列表内部元素可以修改。"
      },
      {
        "type": "fill",
        "q": "Python 中使用 _____ 语法可以快速生成列表，如 [x*2 for x in range(10)]。",
        "answer": "列表推导式",
        "explain": "列表推导式(list comprehension)是Python最强大的特性之一，可以一行代码完成筛选+转换操作。"
      }
    ],
    "5": [
      {
        "type": "single",
        "q": "以下哪种类型可以作为字典的键？",
        "options": [
          "列表",
          "字典",
          "字符串",
          "集合"
        ],
        "answer": 2,
        "explain": "字典的键必须是不可变类型——字符串、数字、元组都可以。列表、字典、集合是可变的，不能作为键。"
      },
      {
        "type": "single",
        "q": "d.get('key', 'default') 与 d['key'] 的区别是？",
        "options": [
          "没有区别",
          "get方法键不存在时返回默认值而不是报错",
          "get方法更快",
          "get方法可以修改值"
        ],
        "answer": 1,
        "explain": "d['key']在键不存在时抛出KeyError。d.get('key', default)则返回默认值，安全得多。"
      },
      {
        "type": "judge",
        "q": "集合中的元素可以重复。",
        "answer": false,
        "explain": "集合的特点就是元素唯一、不重复。向集合添加重复元素不会报错但也不会改变集合。"
      }
    ],
    "6": [
      {
        "type": "single",
        "q": "以下哪个关键字用于跳出循环？",
        "options": [
          "continue",
          "break",
          "return",
          "exit"
        ],
        "answer": 1,
        "explain": "break立即终止整个循环。continue跳过当前迭代进入下一次。return从函数返回。"
      },
      {
        "type": "fill",
        "q": "使用 _____ 函数可以在 for 循环中同时获取索引和元素值。",
        "answer": "enumerate",
        "explain": "for i, item in enumerate(list) 同时获得索引i和元素item，比手动维护计数器更优雅。"
      },
      {
        "type": "judge",
        "q": "while True 会无限循环，除非循环体内有 break。",
        "answer": true,
        "explain": "while True 条件永远为真，必须用break跳出，否则程序会一直运行。编写while循环时务必确保有退出条件。"
      }
    ],
    "7": [
      {
        "type": "single",
        "q": "以下关于函数的说法错误的是？",
        "options": [
          "函数可以有多个return",
          "函数可以没有return语句",
          "函数内部可以定义另一个函数",
          "函数参数的类型必须事先声明"
        ],
        "answer": 3,
        "explain": "Python是动态类型语言，函数参数不需要声明类型（但可以用类型注解提示）。"
      },
      {
        "type": "fill",
        "q": "使用 _____ 关键字可以创建一个匿名函数，如 lambda x: x*2。",
        "answer": "lambda",
        "explain": "lambda 函数是单行的匿名函数，常用于排序的key参数、filter/map等场景。"
      },
      {
        "type": "judge",
        "q": "函数内部可以修改全局变量，直接赋值即可。",
        "answer": false,
        "explain": "函数内直接赋值给全局变量会创建一个同名局部变量。要修改全局变量须先用 global 关键字声明。"
      }
    ],
    "8": [
      {
        "type": "fill",
        "q": "推荐使用 _____ 语句打开文件，因为它会自动关闭文件。",
        "answer": "with",
        "explain": "with open(...) as f: 即使发生异常也会自动关闭文件，避免资源泄漏。"
      },
      {
        "type": "single",
        "q": "open('file.txt', 'w') 中的 'w' 表示什么？",
        "options": [
          "读取",
          "写入（覆盖）",
          "追加",
          "二进制"
        ],
        "answer": 1,
        "explain": "'w'=write 写入模式（会覆盖原有内容），'r'=read读取，'a'=append追加，'b'=binary二进制。"
      },
      {
        "type": "judge",
        "q": "写入中文到文件时，推荐使用 encoding='utf-8' 参数。",
        "answer": true,
        "explain": "UTF-8是最通用的编码。Windows上推荐 utf-8-sig 可以避免Excel打开时中文乱码。"
      }
    ],
    "9": [
      {
        "type": "single",
        "q": "类的方法中，哪个参数代表实例本身？",
        "options": [
          "this",
          "self",
          "that",
          "instance"
        ],
        "answer": 1,
        "explain": "Python 使用 self 指代实例本身。self 是约定俗成的名字（不是关键字），但强烈建议用 self。"
      },
      {
        "type": "fill",
        "q": "定义类时，_____ 方法在创建对象时自动调用，用于初始化属性。",
        "answer": "__init__",
        "explain": "__init__(self) 是构造方法，在创建对象时自动执行。可以设置初始属性值。"
      }
    ]
  },
  "data-analysis": {
    "0": [
      {
        "type": "single",
        "q": "NumPy 中 np.array([1,2,3]) + 1 的结果是？",
        "options": [
          "报错",
          "[2,3,4]",
          "[1,2,3]",
          "[1,2,3,1]"
        ],
        "answer": 1,
        "explain": "NumPy的向量化运算——每个元素自动加1，无需写循环。这是NumPy高性能的原因之一。"
      }
    ],
    "1": [
      {
        "type": "single",
        "q": "Pandas 中以下哪个属于一维数据结构？",
        "options": [
          "DataFrame",
          "Series",
          "ndarray",
          "Panel"
        ],
        "answer": 1,
        "explain": "Series 是一维带标签数组，DataFrame 是二维表格。ndarray 属于NumPy。"
      }
    ],
    "2": [
      {
        "type": "single",
        "q": "以下哪个不是数据清洗操作？",
        "options": [
          "处理缺失值",
          "删除重复数据",
          "数据可视化",
          "格式转换"
        ],
        "answer": 2,
        "explain": "数据可视化属于数据展示阶段。数据清洗是数据预处理的核心环节。"
      }
    ],
    "3": [
      {
        "type": "fill",
        "q": "df.groupby('city')['sales']._____() 可以计算各城市销售总额。",
        "answer": "sum",
        "explain": "groupby后调用聚合函数（sum/mean/count等）才能产生结果。注意groupby本身返回GroupBy对象。"
      }
    ],
    "4": [
      {
        "type": "single",
        "q": "merge(df1, df2, how='left') 中 left 的含义是？",
        "options": [
          "保留df1所有行",
          "保留df2所有行",
          "只保留匹配行",
          "保留所有行"
        ],
        "answer": 0,
        "explain": "左连接保留左表(df1)的所有行，右表(df2)中匹配不到的值填充NaN。"
      }
    ],
    "5": [
      {
        "type": "multi",
        "q": "以下哪些是常用的数据可视化图表？（多选）",
        "options": [
          "柱状图",
          "折线图",
          "散点图",
          "哈希表"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "explain": "柱状图对比分类数据，折线图展示趋势，散点图展示变量关系。哈希表是数据结构不是图表。"
      }
    ],
    "6": [
      {
        "type": "judge",
        "q": "p值小于0.05通常表示研究结果具有统计显著性。",
        "answer": true,
        "explain": "α=0.05是最常用的显著性水平。p<0.05表示在原假设下观察到当前结果的概率小于5%%。"
      }
    ],
    "7": [
      {
        "type": "single",
        "q": "pd.get_dummies() 的作用是？",
        "options": [
          "填充缺失值",
          "独热编码",
          "删除重复值",
          "数据排序"
        ],
        "answer": 1,
        "explain": "get_dummies 将类别变量转换为多个0/1虚拟变量，是特征工程中最常用的类别编码方法。"
      }
    ],
    "8": [
      {
        "type": "single",
        "q": "K-Means聚类前为什么要做标准化？",
        "options": [
          "看起来更美观",
          "消除量纲影响",
          "加快速度",
          "减少内存"
        ],
        "answer": 1,
        "explain": "不同特征的量纲不同（如年龄0-100 vs 收入0-100000），标准化使所有特征在同一尺度上，避免某一维主导聚类结果。"
      }
    ],
    "9": [
      {
        "type": "fill",
        "q": "df.resample('ME') 中的 'ME' 表示按 _____ 重采样。",
        "answer": "月",
        "explain": "resample 是Pandas时间序列处理的核心方法。'ME'=月末，'W'=周，'Q'=季度，'Y'=年。"
      }
    ]
  },
  "data-collection": {
    "0": [
      {
        "type": "single",
        "q": "以下哪种属于半结构化数据？",
        "options": [
          "CSV",
          "JSON",
          "SQLite数据库",
          "Excel"
        ],
        "answer": 1,
        "explain": "JSON是有标签标记但结构灵活的数据格式。CSV和Excel属于结构化数据。"
      }
    ],
    "1": [
      {
        "type": "multi",
        "q": "Pandas可以读取以下哪些格式？（多选）",
        "options": [
          "CSV",
          "Excel",
          "JSON",
          "SQL"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explain": "Pandas通过pd.read_csv/excel/json/sql可以读取所有这些格式，但SQL需要数据库驱动。"
      }
    ],
    "2": [
      {
        "type": "judge",
        "q": "df.query('sales > 1000') 比 df[df['sales'] > 1000] 更简洁且通常更快。",
        "answer": true,
        "explain": "query() 方法语法更简洁，且内部使用了优化，对大数据集效率更高。"
      }
    ],
    "3": [
      {
        "type": "single",
        "q": "数据合并时，左连接(how='left')保留哪些行？",
        "options": [
          "左表所有行",
          "右表所有行",
          "两表共有行",
          "所有行"
        ],
        "answer": 0,
        "explain": "左连接保留左表所有行，右表匹配不到的用NaN填充。"
      }
    ],
    "4": [
      {
        "type": "multi",
        "q": "以下哪些属于数据质量评估维度？（多选）",
        "options": [
          "完整性",
          "准确性",
          "美观性",
          "一致性"
        ],
        "answer": [
          0,
          1,
          3
        ],
        "explain": "美观性不属于数据质量维度。完整性、准确性、一致性、唯一性、时效性、有效性是六大核心维度。"
      }
    ],
    "5": [
      {
        "type": "fill",
        "q": "使用 Python 的 _____ 库配合 BeautifulSoup 可以进行Web数据采集。",
        "answer": "requests",
        "explain": "requests 发送HTTP请求获取网页，BeautifulSoup解析HTML提取数据。两者配合是爬虫的标准组合。"
      }
    ],
    "6": [
      {
        "type": "single",
        "q": "导出CSV文件给Excel用户时，推荐什么编码？",
        "options": [
          "utf-8",
          "gbk",
          "utf-8-sig",
          "ascii"
        ],
        "answer": 2,
        "explain": "utf-8-sig 在文件头加了BOM，Excel能正确识别中文。普通utf-8在Excel中可能显示乱码。"
      }
    ],
    "7": [
      {
        "type": "judge",
        "q": "数据处理流程应该先合并再清洗。",
        "answer": false,
        "explain": "一般情况下应先对各表单独清洗，再合并。如果在合并后清洗，可能因为数据来源不清而难以定位问题。"
      }
    ]
  },
  "supply-chain": {
    "0": [
      {
        "type": "single",
        "q": "以下哪个指标衡量库存管理效率？",
        "options": [
          "毛利率",
          "库存周转率",
          "资产负债率",
          "市盈率"
        ],
        "answer": 1,
        "explain": "库存周转率=销售成本/平均库存，越高说明商品流动越快，资金占用越低。"
      }
    ],
    "1": [
      {
        "type": "fill",
        "q": "ABC分类中，占销售额约70%的少量商品属于 _____ 类。",
        "answer": "A",
        "explain": "A类：少品种、高价值（约占70%销售额）。B类：中等。C类：多品种、低价值。"
      }
    ],
    "2": [
      {
        "type": "single",
        "q": "以下哪种运输方式的单位成本最低？",
        "options": [
          "公路",
          "铁路",
          "航空",
          "水运"
        ],
        "answer": 3,
        "explain": "水运的吨公里成本最低，但时效最慢。航空成本最高但最快。选择合适的运输方式是物流优化的关键。"
      }
    ],
    "3": [
      {
        "type": "multi",
        "q": "关联规则分析中以下哪些是正确的指标含义？（多选）",
        "options": [
          "支持度=同时含A和B的交易/总交易",
          "置信度=含A的交易中同时含B的比例",
          "提升度>1表示正相关",
          "提升度=支持度×置信度"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "explain": "提升度=置信度/B的支持度，不是支持度×置信度。Lift>1表示推荐组合有意义。"
      }
    ],
    "4": [
      {
        "type": "single",
        "q": "RFM模型中，F代表什么？",
        "options": [
          "购买金额",
          "购买频率",
          "最近购买时间",
          "客户年龄"
        ],
        "answer": 1,
        "explain": "R=Recency(最近购买时间)，F=Frequency(购买频率)，M=Monetary(消费金额)。"
      }
    ],
    "5": [
      {
        "type": "judge",
        "q": "移动平均的窗口越大，对近期变化的反应越灵敏。",
        "answer": false,
        "explain": "窗口越大，平滑效果越强，但对近期变化的反应越迟钝。窗口小则更灵敏但噪声更大。"
      }
    ],
    "6": [
      {
        "type": "single",
        "q": "供应商评估中，哪个权重通常最高？",
        "options": [
          "服务",
          "成本",
          "质量",
          "位置"
        ],
        "answer": 2,
        "explain": "质量通常是供应商评估中权重最高的维度，因为质量问题导致的损失（退货、停工、客户流失）远超其他方面。"
      }
    ],
    "7": [
      {
        "type": "judge",
        "q": "供应链健康度评估只需要看成本指标。",
        "answer": false,
        "explain": "供应链健康度需综合评估：成本、效率(周转率)、服务水平(交付率)、质量(合格率)等多个维度。"
      }
    ]
  }
};

// ==================== 课程级练习题（向后兼容） ====================
var quizData = {};
for (var cid in chapterExercises) {
  quizData[cid] = [];
  for (var ch in chapterExercises[cid]) {
    quizData[cid] = quizData[cid].concat(chapterExercises[cid][ch]);
  }
}

// ==================== localStorage 状态 ====================
function getState(key, defaultVal) {
  try { return JSON.parse(localStorage.getItem(key)) || defaultVal; } catch(e) { return defaultVal; }
}
function setState(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

// ==================== 侧边栏渲染 ====================
function renderSidebar(currentCourse, currentChapter) {
  var container = document.getElementById('sidebarCourses');
  if (!container) return;
  var html = '';
  var completedChapters = getState('completedChapters', {});
  courses.forEach(function(c) {
    var completed = 0;
    c.chapters.forEach(function(ch, i) {
      if (completedChapters[c.id + '_' + i]) completed++;
    });
    html += '<div class="course-group">' +
      '<div class="course-header" onclick="toggleSidebarCourse(this)">' +
        '<span>' + c.icon + ' ' + c.title + '</span>' +
        '<span style="display:flex;align-items:center;gap:6px;">' +
          '<span style="font-size:11px;color:var(--text-secondary);">' + completed + '/' + c.chapters.length + '</span>' +
          '<span class="arrow">▶</span>' +
        '</span>' +
      '</div>' +
      '<div class="chapter-list' + (currentCourse === c.id ? ' open' : '') + '">';
    c.chapters.forEach(function(ch, i) {
      var active = currentCourse === c.id && currentChapter === i;
      var done = completedChapters[c.id + '_' + i];
      html += '<a href="learning.html?course=' + c.id + '&chapter=' + i + '" class="' + (active ? 'active' : '') + '">' +
        (done ? '✓ ' : '') + ch.title + '</a>';
    });
    html += '</div></div>';
  });
  container.innerHTML = html;
}

function toggleSidebarCourse(header) {
  header.classList.toggle('open');
  header.nextElementSibling.classList.toggle('open');
}

// ==================== 进度更新 ====================
function updateProgress() {
  var totalChapters = 0, completed = 0;
  var completedChapters = getState('completedChapters', {});
  courses.forEach(function(c) {
    c.chapters.forEach(function(ch, i) {
      totalChapters++;
      if (completedChapters[c.id + '_' + i]) completed++;
    });
  });
  var pct = totalChapters > 0 ? Math.round(completed / totalChapters * 100) : 0;
  var el1 = document.getElementById('overallProgressText');
  var el2 = document.getElementById('overallProgressBar');
  if (el1) el1.textContent = pct + '%';
  if (el2) el2.style.width = pct + '%';
}

function markChapterComplete(courseId, chapterIdx) {
  var completedChapters = getState('completedChapters', {});
  var key = courseId + '_' + chapterIdx;
  if (completedChapters[key]) {
    delete completedChapters[key];
  } else {
    completedChapters[key] = true;
  }
  setState('completedChapters', completedChapters);
}

// ==================== 移动端菜单 ====================
function setupMobile() {
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebarOverlay');
  var mobileBtn = document.getElementById('mobileSidebarBtn');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('show');
    });
  }
  if (mobileBtn) {
    mobileBtn.addEventListener('click', function() {
      sidebar.classList.toggle('mobile-open');
      overlay.classList.toggle('show');
    });
  }

  var pageName = document.body.dataset.page;
  if (pageName) {
    var links = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].dataset.page === pageName) links[i].classList.add('active');
    }
  }
}

function getUrlParam(name) {
  var params = new URLSearchParams(window.location.search);
  return params.get(name);
}
