/**
File: script.js
GUI Assignment: This javascript file generates multiple table based on four numeric inputs provided by the user (horizontal and vertical start/end values)
Kevin Kuang, UMass Lowell Computer Science, kevin_kuang@student.uml.edu
Copyright (c) 2025 by Kuang. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by KK on June 12, 2025 at 4:28 PM

 */

document.getElementById('tableForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const hStart = parseInt(document.getElementById('hStart').value);
  const hEnd = parseInt(document.getElementById('hEnd').value);
  const vStart = parseInt(document.getElementById('vStart').value);
  const vEnd = parseInt(document.getElementById('vEnd').value);
  const errorBox = document.getElementById('error');
  const tableContainer = document.getElementById('tableContainer');

  if(
    [hStart, hEnd, vStart, vEnd].some(isNaN) ||
    hStart < -50 || hEnd > 50 || vStart < -50 || vEnd > 50 ||
    Math.abs(hEnd - hStart) > 100 || Math.abs(vEnd - vStart) > 100
  ){
    errorBox.textContent = 'Please enter values between -50 and 50 with a max range of 100.';
return;
  }

  const hMin = Math.min(hStart, hEnd);
  const hMax = Math.max(hStart, hEnd);
  const vMin = Math.min(vStart, vEnd);
  const vMax = Math.max(vStart, vEnd);

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  headerRow.appendChild(document.createElement('th')); // corner cell

  for (let h = hMin; h <= hMax; h++){
    const th = document.createElement('th');
    th.textContent = h;
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

const tbody = document.createElement('tbody');
    for (let v = vMin; v <= vMax; v++){
        const row = document.createElement('tr');
         const rowHeader = document.createElement('th');
        rowHeader.textContent = v;
        row.appendChild(rowHeader);
        for (let h = hMin; h <= hMax; h++){
    const td = document.createElement('td');
    td.textContent = h * v;
    row.appendChild(td);
}
tbody.appendChild(row);
  }
table.appendChild(tbody);
tableContainer.appendChild(table);
});