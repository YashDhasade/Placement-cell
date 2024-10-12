import express from 'express';
import passport from 'passport';
import * as companyController from '../controllers/companyController.js';

const router = express.Router();

// -------- Get requests ----------
// Route to view the company homepage
router.get('/home', passport.checkAuthentication, companyController.companyPage);

// Route to allocate an interview
router.get('/allocate', passport.checkAuthentication, companyController.allocateInterview);

// -------- Post Requests ---------
// Route to schedule an interview
router.post('/schedule-interview', passport.checkAuthentication, companyController.scheduleInterview);

// Route to update interview status by ID
router.post('/update-status/:id', passport.checkAuthentication, companyController.updateStatus);

export default router;
