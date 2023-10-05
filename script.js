document.getElementById("export-btn").addEventListener("click", function() {
    
        /* find the table element in the page */
        var tbl = document.getElementById('person-table');
        /* create a workbook */
        var wb = XLSX.utils.table_to_book(tbl);
        /* export to file */
        XLSX.writeFile(wb, "Contributors.xlsx");
});
