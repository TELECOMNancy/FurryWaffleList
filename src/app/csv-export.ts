import { Angular2Csv } from 'angular2-csv/Angular2-csv'

export class CsvExport {

exportCsvData(listName: string, data: any) {
  const options = {
    fieldSeparator: ';',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: false
  }

  new Angular2Csv(data, listName, options)
}

}
