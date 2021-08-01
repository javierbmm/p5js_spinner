const template = document.createElement('template');

template.innerHTML = `
    <style>
        :root {
        --p5-color: #ee3567;
        --p5-center: translateX(30%);
        --p5-push-piece: translateX(0);
        --p5-rot1: rotate(90deg);
        --p5-rot2: rotate(161deg);
        --p5-rot3: rotate(-125deg);
        --p5-rot4: rotate(-54deg);
        --p5-rot5: rotate(19deg);
    }
    
    div {
        padding: 50px;
        width: 150px;
        height: 150px;
        border: 1px solid #ee3567;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #spinner-3 {
        width: 70%;
        height: 70%;
        display: block;
        position: relative;
        animation: spin 2s linear infinite;
    }
    
    @keyframes spin {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
    #spinner-3 * {
        display: block;
        width: 100%;
        height: 35%;
        background-color: var(--p5-color);
        position: absolute;
        top: 30%;
        right: 50%;
        bottom: 0;
        transform-origin: right;
    }
    
    #spinner-3 .piece-1 {
        transform: var(--p5-rot1) var(--p5-center);
        animation: pushPiece1 1s ease-out infinite alternate;
    }
    
    #spinner-3 .piece-2 {
        transform: var(--p5-rot2) var(--p5-center);
        animation: pushPiece2 1s ease-out 0.3s infinite alternate;
    }
    
    #spinner-3 .piece-3 {
        transform: var(--p5-rot3) var(--p5-center);
        animation: pushPiece3 1s ease-out 0.6s infinite alternate;
    }
    
    #spinner-3 .piece-4 {
        transform: var(--p5-rot4) var(--p5-center);
        animation: pushPiece4 1s ease-out 0.9s infinite alternate;
    }
    
    #spinner-3 .piece-5 {
        transform: var(--p5-rot5) var(--p5-center);
        animation: pushPiece5 1s ease-out 1.2s infinite alternate;
    }
    
    @keyframes pushPiece1 {
        0%, 70% {
            transform: var(--p5-rot1) var(--p5-center);
        }
        100% {
            transform: var(--p5-rot1) var(--p5-push-piece);
        }
    }
    
    @keyframes pushPiece2 {
        0%, 70% {
            transform: var(--p5-rot2) var(--p5-center);
        }
        100% {
            transform: var(--p5-rot2) var(--p5-push-piece);
        }
    }
    
    @keyframes pushPiece3 {
        0%, 70% {
            transform: var(--p5-rot3) var(--p5-center);
        }
        100% {
            transform: var(--p5-rot3) var(--p5-push-piece);
        }
    }
    
    @keyframes pushPiece4 {
        0%, 70% {
            transform: var(--p5-rot4) var(--p5-center);
        }
        100% {
            transform: var(--p5-rot4) var(--p5-push-piece);
        }
    }
    
    @keyframes pushPiece5 {
        0%, 70% {
            transform: var(--p5-rot5) var(--p5-center);
        }
        100% {
            transform: var(--p5-rot5) var(--p5-push-piece);
        }
    }
    </style>
    <div>
         <span id="spinner-3">
            <span class="piece-1"></span>
            <span class="piece-2"></span>
            <span class="piece-3"></span>
            <span class="piece-4"></span>
            <span class="piece-5"></span>
        </span>
    </div>
`

class P5Spinner extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // TODO: Retrieve 'width' and 'height' as attributes to modify its size
    }

    // TODO: Add a toggle() function to stop/play the animation
}

window.customElements.define('p5-spinner', P5Spinner);



