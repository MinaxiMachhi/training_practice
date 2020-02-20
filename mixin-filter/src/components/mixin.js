export default {
    data() {
        return {
            Text: ""
        };
    },
    computed: {
        toReverseMixin() {
            return this.Text.split("")
                .reverse()
                .join("");
        },
    }
}

