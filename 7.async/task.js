class AlarmClock   {
    constructor()
    {
        this.alarmCollection  = [];
        this.timerId = null; 
    }

    addClock (startTime, actionAlarm, timerId) {

        if (timerId === null || timerId === undefined) { 
            throw new TypeError('Невозможно идентифицировать будильник. Параметр id не передан.')
        }

        this.alarmCollection.map(item => { 
            if (item[0] === timerId) { 
                console.error('Будильник с таким id уже существует.');
                return 0
            }
        });

        this.alarmCollection.push([timerId, startTime, actionAlarm]);
    }

    removeClock (id) {
        this.alarmCollection = this.alarmCollection.filter(function(item) {
            return item[0] != id;
        });
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`
    }

    checkClock (alarmCollection) {
        console.log('alarmCollection', alarmCollection)
        // if alarmCollection.startTime === getCurrentFormattedTime() {

        // }

    }

    start () {
        

    }

    stop () {
        
    }

    printAlarms () {
        this.alarmCollection.forEach((element) => {
            console.log(`Будильник №${element[0]} заведен на ${element[1]}`);
        } )
    }

    clearAlarms () {
        stop();
        this.alarmCollection.splice(0,this.alarmCollection.length);
    }
    
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('09:01', () => console.log('Порав вставать'), 1)
phoneAlarm.addClock('09:02', () => console.log('Давай, вставай уже'), 2)
phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь!'), 1)
phoneAlarm.addClock('09:01', () => console.log('Иди умываться'))