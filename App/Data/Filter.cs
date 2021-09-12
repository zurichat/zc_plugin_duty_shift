namespace App
{
    public class Filter
    {
        //Mongodb filter operator
        //Below is the syntax of the filter operator in MongoDB.
        //{$filter: {input: <array used as input string>, as: <The type of as keyword is string>, cond: <expression is used to evaluate the array elements>}}
        //{ $filter: { input: "$marks", as: "marks", cond: { $gt: [ "$$marks", 10 ] } }
        //Greater than ((>) or $gt) || less than ((<) or $lt) || Greater than equal to ((>=) or $gte) || Less than equal to ((<=) or $lte)
        //To learn more : https://www.educba.com/mongodb-filter/

        public string Input { get; set; }
        public string As { get; set; }
        public string Cond { get; set; }
    }
}