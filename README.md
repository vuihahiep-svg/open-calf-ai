# OpenCalf AI — landing & demo

Vite + React landing cho OpenCalf: hero, showcase, snippet clone repo.

## Ảnh showcase (dùng trong README gốc)

File nguồn trong [`public/showcase/`](public/showcase/). Repo cha **không** thể nhúng `examples/open-calf-ai/public/...` trong README trên GitHub vì đây là **submodule** — cần **đồng bộ bản sao** vào `docs/readme-showcase/` ở root:

```bash
cp public/showcase/*.png ../docs/readme-showcase/
```

Root [`README.md`](../README.md) mục **Try OpenCalf** dùng `docs/readme-showcase/*.png`.

| File | Dùng trên landing |
|------|-------------------|
| `nhaxeutchi-landing.png` | Card **Nhà xe demo** → [nhaxeutchi.vercel.app](https://nhaxeutchi.vercel.app/) |
| `aithucchien-widget-open.png` | Card **AI Thực Chiến** (widget mở) → [aithucchien-iota.vercel.app](https://aithucchien-iota.vercel.app/) |
| `aithucchien-landing.png` | Có thể dùng làm poster “bấm để xem video” trên GitHub README (cùng repo, không lấy ảnh từ `img.youtube.com`) |

## Video

`YOUTUBE_ID` và embed iframe: [`src/components/ShowcaseSection.tsx`](src/components/ShowcaseSection.tsx).

Trang HTML tối giản (cùng `youtube-nocookie` embed) cho README repo cha — không copy từ `public/`, sửa trực tiếp khi đổi ID: [`../docs/readme-showcase/opencalf-youtube-demo.html`](../docs/readme-showcase/opencalf-youtube-demo.html).

## README chính

Ảnh/video tham chiếu từ đây: [README.md](../README.md) mục **Try OpenCalf**.
