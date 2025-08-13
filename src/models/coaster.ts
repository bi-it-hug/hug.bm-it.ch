export class Coaster {
	datetime: Date;
	date: Date;
	time: Date;
	code: string;
	uuid: string;
	waitingtime: number;
	status: string;
	name: string;

	constructor(datetime: Date, date: Date, time: Date, code: string, uuid: string, waitingtime: number, status: string, name: string) {
		this.datetime = datetime;
		this.date = date;
		this.time = time;
		this.code = code;
		this.uuid = uuid;
		this.waitingtime = waitingtime;
		this.status = status;
		this.name = name;
	}
}
