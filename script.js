
const app = Vue.createApp({
    data() {
        return {
            temaEscuro: false
        };
    },

    mounted() {
        const botao = document.getElementById("botao-tema");

        botao.addEventListener("click", () => {
            this.temaEscuro = !this.temaEscuro;

            const curriculo = document.getElementById("curriculo");

            curriculo.classList.toggle("escuro", this.temaEscuro);

            botao.textContent = this.temaEscuro
                ? "☀ Tema claro"
                : "☾ Tema escuro";
        });
    }
});

app.mount("#app");
