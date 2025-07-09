---
title: Colour
category: standardization
order: 5
---

<style>
  /* Color palette styles */
  .color-section {
    margin-bottom: 40px;
  }
  
  .color-palette {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;
  }
  
  .color-box {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: white;
    position: relative;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .color-box.light-text {
    color: #333;
  }
  
  .color-code {
    font-family: monospace;
    font-size: 12px;
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 100%;
    text-align: center;
  }
  
  .interaction-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
  }
  
  .interaction-table td {
    border: 1px solid #e0e0e0;
    padding: 12px;
    text-align: center;
    font-size: 12px;
  }
  
  .palette-section {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 40px;
  }
  
  .palette-column {
    flex: 1;
    min-width: 250px;
  }
  
  .palette-title {
    font-size: 16px;
    margin-bottom: 15px;
    font-weight: bold; /* Changed to bold */
  }
  
  .palette-title-en {
    display: block;
    color: #666;
    font-size: 14px;
    font-weight: bold; /* Added bold for English title */
  }
  
  .description {
    margin-bottom: 30px;
    line-height: 1.6;
  }
  
  /* Make main title bold */
  .main-title {
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 30px;
  }
</style>

<h1 class="main-title">Colour Palette</h1>

<div class="interaction-table-container">
  <table class="interaction-table">
    <tr>
      <td style="background-color: #ffffff; color: #111111;">abc</td>
      <td style="background-color: #ffffff; color: #898B8C;">abc</td>
      <td style="background-color: #ffffff; color: #333;"></td>
      <td style="background-color: #ffffff; color: #333;"></td>
      <td style="background-color: #ffffff; color: #1890ff;">abc</td>
      <td style="background-color: #ffffff; color: #004098;">abc</td>
      <td style="background-color: #ffffff; color: #4FA147;">abc</td>
    </tr>
    <tr>
      <td style="background-color: #A3CEF1; color: white;">abc</td>
      <td style="background-color: #A3CEF1; color: #333;"></td>
      <td style="background-color: #A3CEF1; color: #333;"></td>
      <td style="background-color: #A3CEF1; color: #333;"></td>
      <td style="background-color: #A3CEF1; color: #1890ff;">abc</td>
      <td style="background-color: #A3CEF1; color: #004098;">abc</td>
      <td style="background-color: #A3CEF1; color: #333;"></td>
    </tr>
    <tr>
      <td style="background-color: #3071B9; color: white;">abc</td>
      <td style="background-color: #3071B9; color: white;"></td>
      <td style="background-color: #3071B9; color: #FFFFFF;">abc</td>
      <td style="background-color: #3071B9; color: white;"></td>
      <td style="background-color: #3071B9; color: white;"></td>
      <td style="background-color: #3071B9; color: white;"></td>
      <td style="background-color: #3071B9; color: white;"></td>
    </tr>
    <tr>
      <td style="background-color: #004098; color: white;">abc</td>
      <td style="background-color: #004098; color: white;"></td>
      <td style="background-color: #004098; color: #FFFFFF;">abc</td>
      <td style="background-color: #004098; color: #3071B9;">abc</td>
      <td style="background-color: #004098; color: white;"></td>
      <td style="background-color: #004098; color: white;"></td>
      <td style="background-color: #004098; color: white;"></td>
    </tr>
    <tr>
      <td style="background-color: #E7ECEF; color: #111111;">abc</td>
      <td style="background-color: #E7ECEF; color: #898B8C;">abc</td>
      <td style="background-color: #E7ECEF; color: #333;"></td>
      <td style="background-color: #E7ECEF; color: #333;"></td>
      <td style="background-color: #E7ECEF; color: #333;"></td>
      <td style="background-color: #E7ECEF; color: #004098;">abc</td>
      <td style="background-color: #E7ECEF; color: #4FA147;">abc</td>
    </tr>
    <tr>
      <td style="background-color: #898B8C; color: white;">abc</td>
      <td style="background-color: #898B8C; color: white;"></td>
      <td style="background-color: #898B8C; color: #FFFFFF;">abc</td>
      <td style="background-color: #898B8C; color: white;"></td>
      <td style="background-color: #898B8C; color: white;"></td>
      <td style="background-color: #898B8C; color: white;"></td>
      <td style="background-color: #898B8C; color: white;"></td>
    </tr>
    <tr>
      <td style="background-color: #111111; color: white;">abc</td>
      <td style="background-color: #111111; color: #898B8C;">abc</td>
      <td style="background-color: #111111; color: white;">abc</td>
      <td style="background-color: #111111; color: #3071B9;">abc</td>
      <td style="background-color: #111111; color: white;"></td>
      <td style="background-color: #111111; color: white;"></td>
      <td style="background-color: #111111; color: #4FA147;">abc</td>
    </tr>
  </table>
</div>

<div class="description">
  <p>The above chart displays our colours and how they interact with one another.<br>
  Use this as a starting point when combining colour.</p>
</div>

<div class="palette-section">
  <div class="palette-column">
    <h3 class="palette-title">Primary palette</h3>
    <div class="color-palette">
      <div class="color-box light-text" style="background-color: #ffffff;">
        <span class="color-code">#ffffff</span>
      </div>
      <div class="color-box light-text" style="background-color: #E7ECEF;">
        <span class="color-code">#E7ECEF</span>
      </div>
      <div class="color-box light-text" style="background-color: #898B8C;">
        <span class="color-code">#898B8C</span>
      </div>
      <div class="color-box" style="background-color: #111111;">
        <span class="color-code">#111111</span>
      </div>
      <div class="color-box" style="background-color: #A3CEF1;">
        <span class="color-code">#A3CEF1</span>
      </div>
      <div class="color-box" style="background-color: #3071B9;">
        <span class="color-code">#3071B9</span>
      </div>
      <div class="color-box" style="background-color: #004098;">
        <span class="color-code">#004098</span>
      </div>
    </div>
  </div>
  
  <div class="palette-column">
    <h3 class="palette-title">Secondary palette</h3>
    <div class="color-palette">
      <div class="color-box" style="background-color: #4FA147;">
        <span class="color-code">#4FA147</span>
      </div>
    </div>
    <h3 class="palette-title">Alert palette for components</h3>
    <div class="color-palette">
      <div class="color-box" style="background-color: #B44432;">
        <span class="color-code">#B44432</span>
      </div>
      <div class="color-box" style="background-color: #C26831;">
        <span class="color-code">#C26831</span>
      </div>
    </div>
  </div>
</div>
