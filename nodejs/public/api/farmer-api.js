"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const farmerService = require("../service/farmer-service");
const express = require("express");
const URI = '/farmers';
class FarmerApi {
    routes() {
        return express.Router()
            .get('/:id', (req, res, next) => {
            res.json({ health: 'OK' });
        })
            .get('/', (req, res, next) => {
            const documentNumber = req.query.documentNumber;
            const farmerName = req.query.farmerName;
            farmerService.search({ documentNumber: documentNumber, farmerName: farmerName })
                .then(data => res
                .json(data))
                .catch(e => res
                .status(400)
                .json(e));
        });
    }
}
const api = new FarmerApi();
exports.default = server => server.use(URI, api.routes());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFybWVyLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvYXBpL2Zhcm1lci1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyREFBMEQ7QUFFMUQsbUNBQWtDO0FBRWxDLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQTtBQUV0QjtJQUNJLE1BQU07UUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTthQUNsQixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDekIsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUE7WUFDL0MsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7WUFFdkMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDO2lCQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHO2lCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDZixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHO2lCQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0NBQ0o7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFBO0FBRTNCLGtCQUFlLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEifQ==