import Student from '../models/studentSchema.js';

// Render home page
const homePage = async (req, res) => {
  try {
    const students = await Student.find({});
    return res.render('home', { students });
  } catch (error) {
    console.error(`Error in rendering home page: ${error}`);
    return res.redirect('back');
  }
};


export default homePage;
