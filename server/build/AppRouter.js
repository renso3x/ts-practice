"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Singleton 1 router only
var express_1 = __importDefault(require("express"));
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter.getInstance = function () {
        if (!AppRouter.instance) {
            AppRouter.instance = express_1.default.Router();
        }
        return AppRouter.instance;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
