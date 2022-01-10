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

        if (this.alarmCollection.find(element => element.id === timerId)) {
            console.error('Будильник с таким id уже существует.');
            return null
        }

        this.alarmCollection.push({
            time: startTime,
            id: timerId,
            callback: actionAlarm
        });
    }

    removeClock (id) {
        this.alarmCollection.splice(this.alarmCollection.indexOf(
            this.alarmCollection.find(element => element.id === id)
        ), 1);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`
    }

    start () {
        const checkClock = () => {
            if (this.time == this.getCurrentFormattedTime()) {
                return this.callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval = () => {
                this.alarmCollection.map(element => checkClock(element));
            }
        }
    }

    stop () {
        let clearInterval = () => {
            this.timerId = null;
        }
        if (this.timerId) {
            clearInterval();
        }
    }

    printAlarms () {
        this.alarmCollection.forEach((element) => {
            console.log(`Будильник №${element[0]} заведен на ${element[1]}`);
        } )
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
    
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('09:01', () => console.log('Порав вставать'), 1)
phoneAlarm.addClock('09:01', () => console.log('Порав вставать'), 1)
phoneAlarm.addClock('09:02', () => console.log('Давай, вставай уже'), 2)
phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь!'), 1)
phoneAlarm.addClock('09:01', () => console.log('Иди умываться'))