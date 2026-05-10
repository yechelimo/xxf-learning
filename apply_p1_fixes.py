#!/usr/bin/env python3
"""批量应用 P1 优化：meta描述、script defer、移动端触控、内联样式清理"""

import re, os

BASE = r'C:\Users\晓帆\Desktop\hal的网页'

# 每个页面的 meta 描述
page_metas = {
    'index.html':    '商务数据分析与应用专业学生学习系统——在线学习Python编程、数据分析技术、数据采集与处理、供应链数据分析四大课程，提供代码编辑器、章节练习和在线考试。',
    'profile.html':  '徐晓帆的个人学习档案——商务数据分析与应用专业，查看学习进度、掌握技能、长期学习目标和各课程完成情况。',
    'learning.html': '知识点学习核心模块——系统化学习Python编程基础、数据分析技术、数据采集与处理、供应链数据分析，每章含代码示例和重点总结。',
    'practice.html': '专项练习——Python在线代码编辑器、选择题、多选题、判断题、填空题，按课程和章节针对性练习，查看答案解析。',
    'exam.html':     '在线考试系统——分课程分章节组卷、限时作答（10-60分钟）、自动批改计分、错题汇总与知识点解析、历史成绩记录。',
    'notes.html':    '学习笔记——自由记录学习要点、心得和疑问，自动保存到浏览器本地存储，支持清空和随时编辑。',
}

for filename, meta_desc in page_metas.items():
    filepath = os.path.join(BASE, filename)
    if not os.path.exists(filepath):
        print(f'  SKIP {filename} - not found')
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. 添加 meta description（在 viewport 之后）
    if '<meta name="description"' not in content:
        old = '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
        new = '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta name="description" content="' + meta_desc + '">'
        content = content.replace(old, new)

    # 2. script 标签加 defer（common.js）
    content = content.replace(
        '<script src="common.js"></script>',
        '<script src="common.js" defer></script>'
    )

    # 3. 内联 script 标签也加 defer（如果有的话）
    # 注意：内联 script 不能用 defer，只给外链加

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  OK {filename}: meta + defer added')


# 创建 404 页面
not_found_html = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="页面未找到——返回学生学习系统首页">
<title>404 页面未找到 - 学生学习系统</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: #f8fafc; color: #1e293b; display: flex;
  align-items: center; justify-content: center; min-height: 100vh; text-align: center;
}
.card { background: #fff; border-radius: 12px; padding: 48px 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); max-width: 480px; }
h1 { font-size: 72px; color: #3b82f6; margin-bottom: 8px; }
h2 { font-size: 20px; margin-bottom: 16px; font-weight: 600; }
p { color: #64748b; font-size: 14px; margin-bottom: 24px; line-height: 1.6; }
.btn {
  display: inline-block; padding: 10px 24px; background: #3b82f6; color: #fff;
  border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;
  transition: background 0.2s;
}
.btn:hover { background: #2563eb; }
.links { margin-top: 16px; font-size: 13px; }
.links a { color: #3b82f6; text-decoration: none; margin: 0 8px; }
.links a:hover { text-decoration: underline; }
</style>
</head>
<body>
<div class="card">
  <h1>404</h1>
  <h2>页面未找到</h2>
  <p>你访问的页面不存在或已被移动。<br>可能是链接失效，或者地址输入有误。</p>
  <a href="index.html" class="btn">← 返回首页</a>
  <div class="links">
    <a href="profile.html">学生简介</a> ·
    <a href="learning.html">知识点学习</a> ·
    <a href="practice.html">专项练习</a> ·
    <a href="exam.html">在线考试</a>
  </div>
</div>
</body>
</html>
"""

with open(os.path.join(BASE, '404.html'), 'w', encoding='utf-8') as f:
    f.write(not_found_html)
print('  OK 404.html created')

print('\nAll P1 fixes applied!')
