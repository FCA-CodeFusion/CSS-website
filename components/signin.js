class SignInButton extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <button>Sign In</button>
            <style>
                :host {
                        display: flex;
                        justify-content: flex-end;
                         width: 100%;
                        
}

                button {
                    background-color: rgba(2, 2, 255, 0.9);
                    border: 0;
                    border-radius: 5px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 90px;
                    height: 35px;
                    font-weight: 700;
                    cursor: pointer;
                }

                button:hover {
                background-color: rgb(20, 122, 255);}
            </style>
        `;
    }
}

customElements.define('sign-in-button', SignInButton);
