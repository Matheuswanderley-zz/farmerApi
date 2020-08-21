"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const farmer_api_1 = require("./api/farmer-api");
const support_api_1 = require("./api/support-api");
const path = require("path");
const express = require("express");
const assets = server => server.use(express.static(path.join(path.resolve(), '/assets')));
exports.default = server_1.default(express())
    .map(assets)
    .map(support_api_1.default)
    .map(farmer_api_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxQ0FBNkI7QUFDN0IsaURBQXdDO0FBQ3hDLG1EQUEwQztBQUUxQyw2QkFBNEI7QUFDNUIsbUNBQWtDO0FBRWxDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FDL0IsT0FBTyxDQUFDLE1BQU0sQ0FDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFOUMsa0JBQWUsZ0JBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDO0tBQ1gsR0FBRyxDQUFDLHFCQUFVLENBQUM7S0FDZixHQUFHLENBQUMsb0JBQVMsQ0FBQyxDQUFBIn0=