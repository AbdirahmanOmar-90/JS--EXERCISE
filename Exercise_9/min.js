let car ={
        make: 2000,
        model: 'toyoyo04',
        year: 2002,
        start: function(){
                console.log('This car has started.',this.make)
        }

}

car.start()