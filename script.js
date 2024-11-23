function mincost(arr)
{ 
	 // Create a min-heap using a priority queue
    let minHeap = [...arr];
    minHeap.sort((a, b) => a - b); // Sort array initially to simulate a min-heap

    let totalCost = 0;

    while (minHeap.length > 1) {
        // Extract two smallest elements
        const first = minHeap.shift();
        const second = minHeap.shift();

        // Calculate cost of merging
        const cost = first + second;
        totalCost += cost;

        // Insert the merged rope back into the heap
        minHeap.push(cost);
        minHeap.sort((a, b) => a - b); // Re-sort to maintain heap property
    }

    return totalCost;
}

module.exports=mincost;
