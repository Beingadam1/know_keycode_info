// DOM ELEMENT
const keyInfo = document.getElementById('key-info');
const showKey = document.getElementById('show-key');
const input = document.getElementById('input');
const footer = document.getElementById('footer');
const heading = document.getElementById('heading');

// FUNCTION THAT SHOWS THE KEY INFO
function showInfo(e) {
  // STYLE MANIPULATION
  showKey.textContent = e.which;
  showKey.style.fontSize = '10rem';
  showKey.style.padding = '0.5rem';
  showKey.style.boxShadow = 'none';
  heading.style.marginBottom = '1rem';

  // INSERT THE KEYCODE INFO HTML STRUCTURE
  keyInfo.innerHTML = ` 
    <div class="card">
      <div class="card-title">event.key</div>
      <div class="card-body">${e.key === ' ' ? 'Space' : e.key}</div>
    </div>
    <div class="card">
      <div class="card-title">event.location</div>
      <div class="card-body location">${
        e.location === 1
          ? 'Left-side modifier Keys'
          : e.location === 2
          ? 'Right-side modifier Keys'
          : 'General keys'
      }
      </div>
    </div>
    <div class="card">
      <div class="card-title">event.code</div>
      <div class="card-body">${e.code}</div>
    </div>
    <div class="card">
      <div class="card-title">event.which</div>
      <div class="card-body">${e.which}</div>
    </div>
    <div class="card">
      <div class="card-title">Description</div>
      <div class="card-body">${e.key === ' ' ? 'Space Bar' : e.key}</div>
    </div>
    <div class="card">
      <div class="card-title">Event Dump</div>
      <div class="card-body last-element">
      {<br>
            "key": ${e.key === ' ' ? 'Space' : e.key},<br>
            "keyCode": ${e.keyCode},<br>
            "which": ${e.which},<br>
            "code": ${e.code},<br>
            "location": ${e.location},<br>
            "altkey": ${e.altKey},<br>
            "crtl": ${e.ctrlKey},<br>
            "metakey": ${e.metaKey}<br>
            "shiftkey": ${e.shiftKey},<br>
            "repeat": ${e.repeat}<br>
      }<br>
      </div>
    </div>
  `;

  // PREVENT DEFAULT REFRESHING OF PAGES WITH F5
  if (e.code === 'F5') {
    e.preventDefault();
  }
}

// FUNCTION THT SHOW THE KEY INFO ON MOBILE
function showOnMobile(e) {
  keyInfo.style.display = 'block';
  footer.style.display = 'block';
  showKey.style.display = 'block';
  e.target.value = '';
}

// EVENT HANDLERS
window.addEventListener('keydown', showInfo);
input.addEventListener('input', showOnMobile);
