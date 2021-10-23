(function() {

    if ('content' in document.createElement('template')) {
      const tmpl = document.createElement('template')
  

      tmpl.innerHTML = `
        <h2>
          <button aria-expanded="false">
          </button>
        </h2>
        <div class="content" hidden>
          <slot></slot>
        </div>
        <style>
          h2 {
            margin: 0;
          }
  
          h2 button {
            all: inherit;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0.5em 0;
          }
  
          h2 button:focus svg {
            outline: 2px solid ;
          }
  
          button svg {
            height: 1em;
            margin-left: 0.5em;
          }
  
          [aria-expanded="true"] .vert {
            display: none;
          }
  
          [aria-expanded] rect {
            fill: currentColor;
          }
        </style>
      `

      if (document.head.attachShadow) {
        class ToggleSection extends HTMLElement {
          constructor() {
            super()
  
      
            this.setAttribute('role', 'region')
  
       
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(tmpl.content.cloneNode(true))
  
        
            this.btn = this.shadowRoot.querySelector('h2 button')
  
         
            const oldHeading = this.querySelector(':first-child')
            
            let level = parseInt(oldHeading.tagName.substr(1))
           
            let id = oldHeading.id
  
           
            this.heading = this.shadowRoot.querySelector('h2')
            
           
            if (id) {
              this.heading.id = id
            }
            
            
            if (!level) {
              console.warn('The first element inside each <toggle-section> should be a heading of an appropriate level.')
            }
            
          
            if (level && level !== 2) {
              this.heading.setAttribute('aria-level', level)
            }
  
           
            this.btn.innerHTML = oldHeading.textContent + this.btn.innerHTML
            oldHeading.parentNode.removeChild(oldHeading)
  
 
            this.switchState = () => {
              let expanded = this.getAttribute('open') === 'true' || false
  

              this.btn.setAttribute('aria-expanded', expanded)

              this.shadowRoot.querySelector('.content').hidden = !expanded
            }
  
            this.btn.onclick = () => { 

              let open = this.getAttribute('open') === 'true' || false
              this.setAttribute('open', open ? 'false' : 'true')
              

              if (this.heading.id && !open) {
                history.pushState(null, null, '#' + this.heading.id)
              }
            }
          }
          
          connectedCallback() {
            if (window.location.hash.substr(1) === this.heading.id) {
              this.setAttribute('open', 'true')
              this.btn.focus()
            } 
          }
  
          static get observedAttributes() {
            return ['open']
          }
  

          attributeChangedCallback(name) {
            if (name === 'open') {
              this.switchState()
            }
          }
        }
  
        window.customElements.define('toggle-section', ToggleSection) 
        const buttons = document.createElement('div')
        const first = document.querySelector('toggle-section')
        const all = document.querySelectorAll('toggle-section')
  
        first.parentNode.insertBefore(buttons, first)
  

        buttons.addEventListener('click', (e) => {
          let expand = e.target.id === 'expand' ? true : false
          Array.prototype.forEach.call(all, (t) => {
            t.setAttribute('open', expand)
          })
        })
      }
    }
  })()

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

function bt1(){
  btn1.style.backgroundColor ="#FF715B";
  btn2.style.backgroundColor ="#C4C4C4";
  btn3.style.backgroundColor ="#C4C4C4";
  btn4.style.backgroundColor ="#C4C4C4";
}

function bt2(){
  btn1.style.backgroundColor ="#C4C4C4";
  btn2.style.backgroundColor ="#FF715B";
  btn3.style.backgroundColor ="#C4C4C4";
  btn4.style.backgroundColor ="#C4C4C4";
}

function bt3(){
  btn1.style.backgroundColor ="#C4C4C4";
  btn2.style.backgroundColor ="#C4C4C4";
  btn3.style.backgroundColor ="#FF715B";
  btn4.style.backgroundColor ="#C4C4C4";
}

function bt4(){
  btn1.style.backgroundColor ="#C4C4C4";
  btn2.style.backgroundColor ="#C4C4C4";
  btn3.style.backgroundColor ="#C4C4C4";
  btn4.style.backgroundColor ="#FF715B";
}