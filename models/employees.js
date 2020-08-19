const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeesSchema = new schema({   
    emp_name: { type: String, required: true },
    emp_email: { type: String, required: true },    
    branch_name: { type: String, required: true },
    bank_name: { type: String, required: true },
});

const Employees = module.exports = mongoose.model("employees", employeesSchema);