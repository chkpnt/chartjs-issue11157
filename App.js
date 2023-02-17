import "./index.html";
import { ArcElement, Chart, PieController } from "chart.js";

// This needs to be babeled for "ios 14":
Chart.register(PieController, ArcElement);

// This will be babeled:
class Example {
  static greeting = "Hello World";
}

console.log("Hello World!");
