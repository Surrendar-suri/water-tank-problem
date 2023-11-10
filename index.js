function solveWaterTank() {
    const inputArray = document.getElementById('inputArray').value;
    const blocks = inputArray.split(',').map(Number);

    const table = document.getElementById('waterTankTable');
    table.innerHTML = ''; // Clear previous table content

    let totalWater = 0;

    for (let i = 0; i < blocks.length; i++) {
        let leftMax = 0;
        for (let j = 0; j < i; j++) {
            leftMax = Math.max(leftMax, blocks[j]);
        }

        let rightMax = 0;
        for (let k = i + 1; k < blocks.length; k++) {
            rightMax = Math.max(rightMax, blocks[k]);
        }

        const minMax = Math.min(leftMax, rightMax);
        const waterStored = Math.max(0, minMax - blocks[i]);
        totalWater += waterStored;

        const row = table.insertRow();
        const cell = row.insertCell();
        cell.textContent = blocks[i];
        cell.style.backgroundColor = `rgba(0, 0, 255, ${waterStored / 10})`; // Adjust color based on water stored
    }

    const outputResult = document.getElementById('outputResult');
    outputResult.textContent = `Output: ${totalWater} Units`;
}
