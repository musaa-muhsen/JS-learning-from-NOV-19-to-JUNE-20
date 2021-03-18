const id = {
    name: 'jeff',
    greet: function () {
        const self = this;
        setTimeout(function () {
            console.log(self.name);
        }, 1000);
    }
};

const id = {
    name: 'jeff',
    greet: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

id.greet();
