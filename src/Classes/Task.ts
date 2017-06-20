/**
 * @author Fatima Asamee
 * @export
 * @class Task
 * 
 */
 export class Task{
    private  _title:string;
    private _subject:string;
    private _createdDate:Date;
    // these features left for advanced feature 
    private _startDate:Date;
    private _endDate:Date;
    private  _startTime:any;
    private _endTime:any;
    private _image:any;
    
// full constructor  for the task with optional parameters for advanced feature
     constructor(_title:string,_subject:string,_createdDate:Date,_stratDate?:Date,_endDate?:Date,
                 _startTime?:any,_endTime?:any,_image?:any){
         this._title = _title;
         this._subject = _subject;
         this._startDate = _stratDate;
         this._endDate = _endDate;
         this._startTime = _startTime ;
         this._endTime = _endTime;
         this._image = _image;
         this._createdDate = _createdDate;

     }

     // setters and getters for attributes
     get title():string{
         return this._title;}
     set title(newTitle:string){
         this._title = newTitle;}
     get subject():string{
         return this._subject;
     }
     set subject(newSubject:string){
         this._subject = newSubject;
     }
     get startDate():Date{
         return this._startDate;
        }
     set startDate(newStartDate:Date){
            this._startDate = newStartDate;
        }
        get endDate():Date{
            return this._endDate;
        }
        set endDate(newEndDate:Date){
            this._endDate = newEndDate;
        }
        get startTime():any{
            return this._startTime;
        }
        set startTime(newStartTime:any){
            this._startTime = newStartTime;
        }
        get endTime():any{
            return this._endTime;
        }
        set endTime(newEndDate:any){
            this._endTime
        }
        get image():any{
            return this._image;
        }
        set image(newImage:any){
            this._image = newImage;
        }
        get createdDate():Date{
            return this._createdDate;
        }
        set createdDate(newDate:Date){
            this._createdDate = newDate;
        }
/* End of getters and Setters*/


}
