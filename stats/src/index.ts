import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportsTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportsTargets/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
