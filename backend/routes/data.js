const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        id:         String,
        location:   String,
        iso_code:   String,
        date:       Date,
        total_vaccinations: Number,
        people_vaccinated:  Number,
        people_fully_vaccinated:    Number,
        daily_vaccinations_raw:     Number,
        daily_vaccinations:         Number,
        total_vaccinations_per_hundred:     Number, 
        people_vaccinated_per_hundred:      Number,
        people_fully_vaccinated_per_hundred:    Number,
        daily_vaccinations_per_million:         Number
}
);

module.exports = mongoose.model("Data", DataSchema);