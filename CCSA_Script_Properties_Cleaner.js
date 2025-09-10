/**
 * @fileoverview Cleans Script Properties from ScriptProp.csv, keeping essentials for CCSA_Doc_Version_Control.
 * @author Tim Caldwell
 * @version v0.1
 * @lastUpdated September 10, 2025 1:36 AM MST
 */

function C
  
  // Check if ScriptProp.csv exists
  if (!files.hasNext()) {
    Logger.log('Error: ScriptProp.csv not found in shared folder.');
    return;
  }
  
  // Read CSV
  var file = files.next();
  var csvContent = file.getBlob().getDataAsString();
  var csvRows = Utilities.parseCsv(csvContent);
  
  // Define essential properties to keep
            
  
  // Update Script Properties
  var scriptProperties = PropertiesService.getScriptProperties();
  var currentProperties = scriptProperties.getProperties();
  
  // Log current properties
  Logger.log('Current Script Properties Before Cleaning:');
  for (var key in currentProperties) {
    Logger.log(key + ': ' + currentProperties[key]);
  }
  
  // Clear all existing properties
  for (var key in currentProperties) {
    scriptProperties.deleteProperty(key);
    Logger.log('Deleted: ' + key);
  }
  
  // Set essential properties from CSV
  var newProperties = {};
  for (var i = 1; i < csvRows.length; i++) {
    var key = csvRows[i][0];
    var value = csvRows[i][1];
    if (key && value && keepProperties.indexOf(key) !== -1 && !newProperties[key]) {
      scriptProperties.setProperty(key, value);
      newProperties[key] = value;
      Logger.log('Set: ' + key + ' = ' + value);
    }
  }
  
  // Log final properties
  Logger.log('\nFinal Script Properties:');
  var finalProperties = scriptProperties.getProperties();
  for (var key in finalProperties) {
    Logger.log(key + ': ' + finalProperties[key]);
  }
  
  // Save cleaned CSV
  var newFileName = 'CCSA_ScriptProp_Cleaned_' + Utilities.formatDate(new Date(), 'MST', 'yyyyMMdd_HHmmss') + '.csv';
  var newCsvContent = 'Key,Value\n';
  for (var key in newProperties) {
    newCsvContent += key + ',' + newProperties[key] + '\n';
  }
  folder.createFile(newFileName, newCsvContent, MimeType.CSV);
  Logger.log('Saved cleaned properties to ' + newFileName + ' in shared folder.');
}
