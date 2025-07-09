---
title: 库存管理系统
category: 演示展示
order: 3
demo: false
---

这是一个全屏的库存管理界面，以横屏模态框形式呈现。

## 系统概述 

这套库存管理系统提供了全方位的农业订单、产品及物流管理功能。系统采用卡片式布局取代传统表格设计，提升了移动端适配性和用户体验。

<!-- Ant Design style single Info Alert, icon and text same size, centered, font-family follows <p> element -->
<div style="min-width: 280px; border-radius: 4px; border: 1px solid #bae7ff; background: #e6f7ff; display: flex; align-items: center; gap: 8px; padding: 12px 16px; justify-content: center; font-family: inherit;">
  <span style="color: #1890ff; font-size: 24px; display: flex; align-items: center;">&#8505;</span>
  <span style="color: #10239e; display: flex; align-items: center;">
    明天周四更新英文版 
  </span>
</div>
<br>

[完整演示版本](https://codex.mornoir.com/demos/inventory)

<!-- Simple Centered Image Popup Viewer with Mobile Zoom Support, 16:9 Aspect Ratio -->

<style>
/* Popup overlay and modal */
#imagePopupOverlay {
  display: none;
  position: fixed;
  z-index: 10000;
  left: 0; top: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.75);
  justify-content: center;
  align-items: center;
}
#imagePopupOverlay.active {
  display: flex;
}
#imagePopupModal {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: transparent;
  border-radius: 10px;
  box-shadow: 0 4px 32px #000a;
  overflow: hidden;
  touch-action: none;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 16 / 9;
  width: 80vw;
  min-width: 320px;
}
#imagePopupModal > * {
  max-width: 100%;
  max-height: 100%;
}
#imagePopupClose {
  position: absolute;
  top: 12px; right: 18px;
  z-index: 2;
  background: #fff;
  color: #222;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 50%;
  width: 40px; height: 40px;
  cursor: pointer;
  box-shadow: 0 2px 8px #0003;
  opacity: 0.85;
  transition: background 0.2s;
}
#imagePopupClose:hover { background: #eee; }
#imagePopupImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  cursor: grab;
  border-radius: 8px;
  background: #222;
  aspect-ratio: 16 / 9;
}
.image-popup-trigger {
  cursor: pointer;
  transition: filter 0.15s;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.image-popup-trigger:hover {
  filter: brightness(0.95) blur(1px);
}
</style>

<!-- Replace the src below with your image, and use class="image-popup-trigger" on any image you want to pop up -->
<img src="https://adt.wtf/img/inv-zh.png" alt="Click to view"
     class="image-popup-trigger"
     style="max-width:400px; width:100%; border-radius:6px; border:1px solid #ddd; margin:1em auto; display:block; aspect-ratio: 16 / 9; object-fit: cover;">

<!-- Popup Modal Structure -->
<div id="imagePopupOverlay">
  <div id="imagePopupModal">
    <button id="imagePopupClose" title="Close">&times;</button>
    <img id="imagePopupImg" src="" alt="Popup Image">
  </div>
</div>

<script>
(function() {
  // --- Open Popup ---
  document.addEventListener('click', function(e) {
    let t = e.target;
    if (t.classList.contains('image-popup-trigger')) {
      let img = document.getElementById('imagePopupImg');
      img.src = t.src;
      img.style.transform = "scale(1) translate(0px,0px)";
      img.dataset.scale = "1";
      img.dataset.tx = "0";
      img.dataset.ty = "0";
      document.getElementById('imagePopupOverlay').classList.add('active');
      e.preventDefault();
    }
  });
  // --- Close Popup ---
  document.getElementById('imagePopupClose').onclick = function() {
    document.getElementById('imagePopupOverlay').classList.remove('active');
  };
  document.getElementById('imagePopupOverlay').onclick = function(e) {
    if (e.target === this) this.classList.remove('active');
  };

  // --- Zoom & Pan Logic for Mobile & Desktop ---
  const img = document.getElementById('imagePopupImg');
  let lastTouchDist = null, lastTouchMid = null, dragging = false, lastX=0, lastY=0, tx=0, ty=0, scale=1;

  function setTransform(s, dx, dy) {
    img.style.transform = `scale(${s}) translate(${dx}px,${dy}px)`;
    img.dataset.scale = s;
    img.dataset.tx = dx;
    img.dataset.ty = dy;
  }

  // Pinch-to-zoom for mobile
  img.addEventListener('touchstart', function(e) {
    if (e.touches.length === 2) {
      lastTouchDist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      lastTouchMid = {
        x: (e.touches[0].pageX + e.touches[1].pageX)/2,
        y: (e.touches[0].pageY + e.touches[1].pageY)/2
      };
    } else if (e.touches.length === 1) {
      dragging = true;
      lastX = e.touches[0].pageX - tx;
      lastY = e.touches[0].pageY - ty;
    }
  });
  img.addEventListener('touchmove', function(e) {
    if (e.touches.length === 2 && lastTouchDist !== null) {
      let d = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      let mid = {
        x: (e.touches[0].pageX + e.touches[1].pageX)/2,
        y: (e.touches[0].pageY + e.touches[1].pageY)/2
      };
      let s = Math.max(1, Math.min(5, scale * d / lastTouchDist));
      setTransform(s, tx, ty);
      e.preventDefault();
    } else if (e.touches.length === 1 && dragging) {
      tx = e.touches[0].pageX - lastX;
      ty = e.touches[0].pageY - lastY;
      setTransform(scale, tx, ty);
      e.preventDefault();
    }
  });
  img.addEventListener('touchend', function(e) {
    if (e.touches.length < 2) lastTouchDist = null;
    if (e.touches.length === 0) {
      dragging = false;
      scale = parseFloat(img.dataset.scale) || 1;
      tx = parseFloat(img.dataset.tx) || 0;
      ty = parseFloat(img.dataset.ty) || 0;
    }
  });

  // Mouse wheel zoom for desktop
  img.addEventListener('wheel', function(e) {
    e.preventDefault();
    scale = Math.max(1, Math.min(5, scale + (e.deltaY < 0 ? 0.1 : -0.1)));
    setTransform(scale, tx, ty);
  });

  // Drag to pan for desktop
  img.addEventListener('mousedown', function(e) {
    dragging = true;
    lastX = e.pageX - tx;
    lastY = e.pageY - ty;
    img.style.cursor = "grabbing";
    e.preventDefault();
  });
  window.addEventListener('mousemove', function(e) {
    if (dragging) {
      tx = e.pageX - lastX;
      ty = e.pageY - lastY;
      setTransform(scale, tx, ty);
    }
  });
  window.addEventListener('mouseup', function(e) {
    if (dragging) {
      dragging = false;
      img.style.cursor = "grab";
    }
  });

  // Reset zoom on popup open
  document.getElementById('imagePopupOverlay').addEventListener('transitionend', function() {
    scale = 1; tx = 0; ty = 0;
    setTransform(1, 0, 0);
  });
})();
</script>