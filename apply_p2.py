#!/usr/bin/env python3
"""P2: 替换 emoji → Font Awesome 图标 + 加载动画"""

import os, re

BASE = r'C:\Users\晓帆\Desktop\hal的网页'
pages = ['index.html', 'profile.html', 'learning.html', 'practice.html', 'exam.html', 'notes.html']

# Font Awesome CDN
fa_css = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">'

# emoji → FA 图标映射
emoji_map = {
    '&#x1F4DA;': '<i class="fa-solid fa-book-open"></i>',  # 📚 → book
    '&#x1F468;&#x200D;&#x1F393;': '<i class="fa-solid fa-user-graduate"></i>',  # 👨‍🎓 → student
    '&#x1F44B;': '<i class="fa-solid fa-hand-wave"></i>',  # 👋 → wave
    '🐍': '<i class="fa-brands fa-python"></i>',  # Python
    '📊': '<i class="fa-solid fa-chart-bar"></i>',  # 数据分析
    '🔍': '<i class="fa-solid fa-magnifying-glass-data"></i>',  # 数据采集
    '🚚': '<i class="fa-solid fa-truck-fast"></i>',  # 供应链
    '📝': '<i class="fa-solid fa-pen-to-square"></i>',  # 考试
    '📄': '<i class="fa-solid fa-file-code"></i>',  # 参考
    '▶': '<i class="fa-solid fa-play"></i>',  # 运行
    '↺': '<i class="fa-solid fa-rotate-right"></i>',  # 重置
    '💾': '<i class="fa-solid fa-floppy-disk"></i>',  # 保存
    '🗑': '<i class="fa-solid fa-trash-can"></i>',  # 清空
    '📖': '<i class="fa-solid fa-book"></i>',  # 学习
    '🎉': '<i class="fa-solid fa-trophy"></i>',  # 优秀
    '📚': '<i class="fa-solid fa-book-open-reader"></i>',  # 加强学习
}

for filename in pages:
    filepath = os.path.join(BASE, filename)
    if not os.path.exists(filepath):
        print(f'  SKIP {filename}')
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 添加 Font Awesome CSS（在 style.css 之前）
    if 'font-awesome' not in content and 'fa-solid' not in content:
        content = content.replace(
            '<link rel="stylesheet" href="style.css">',
            fa_css + '\n<link rel="stylesheet" href="style.css">'
        )

    # 替换 emoji
    for emoji, fa_icon in emoji_map.items():
        # 只在 HTML 内容中替换（不在 script 中替换）
        if emoji in content:
            # 简单替换（emoji 在 HTML 中的位置）
            content = content.replace('>' + emoji + ' ', '>' + fa_icon + ' ')
            content = content.replace('">' + emoji, '">' + fa_icon)
            # 也处理直接跟在标签后的情况
            content = content.replace(emoji + ' ', fa_icon + ' ')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  OK {filename}')


# 同时更新 common.js 中的课程 icon 字段
common_path = os.path.join(BASE, 'common.js')
with open(common_path, 'r', encoding='utf-8') as f:
    content = f.read()

icon_map_js = {
    '"🐍"': '"<i class=\\\"fa-brands fa-python\\\"></i>"',
    '"📊"': '"<i class=\\\"fa-solid fa-chart-bar\\\"></i>"',
    '"🔍"': '"<i class=\\\"fa-solid fa-magnifying-glass-data\\\"></i>"',
    '"🚚"': '"<i class=\\\"fa-solid fa-truck-fast\\\"></i>"',
}

for old, new in icon_map_js.items():
    content = content.replace(old, new)

with open(common_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('  OK common.js')


# 更新 style.css：添加基础动画
style_path = os.path.join(BASE, 'style.css')
with open(style_path, 'r', encoding='utf-8') as f:
    style = f.read()

# 在 style.css 末尾添加动画
animations = """
/* ==================== 加载动画 ==================== */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes skeletonPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* 卡片入场动画 */
.card { animation: fadeInUp 0.4s ease both; }
.card:nth-child(1) { animation-delay: 0.05s; }
.card:nth-child(2) { animation-delay: 0.1s; }
.card:nth-child(3) { animation-delay: 0.15s; }
.card:nth-child(4) { animation-delay: 0.2s; }
.card:nth-child(5) { animation-delay: 0.25s; }

/* 骨架屏 */
.skeleton {
  background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
  background-size: 200% 100%;
  animation: skeletonPulse 1.5s ease-in-out infinite;
  border-radius: var(--radius);
}
.skeleton-line { height: 14px; margin: 8px 0; }
.skeleton-line.short { width: 60%; }
.skeleton-line.medium { width: 80%; }
.skeleton-block { height: 100px; margin: 12px 0; }
"""

if 'fadeInUp' not in style:
    style += animations

with open(style_path, 'w', encoding='utf-8') as f:
    f.write(style)
print('  OK style.css (animations added)')

print('\nP2 complete!')
