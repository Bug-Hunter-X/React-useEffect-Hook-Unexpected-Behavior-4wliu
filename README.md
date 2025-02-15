# React useEffect Hook Unexpected Behavior

This repository demonstrates a common error when using the `useEffect` hook in React. The provided code intends to update a count state variable to 1 on component mount, however, due to an incorrect dependency array it does not work as expected.

## Bug Description
The bug lies in the logic within the `useEffect` hook. The condition `if (count === 0)` only gets executed once on the initial render.  Even after incrementing the count, the useEffect hook does not trigger again because it is only looking for changes in an empty array `[]` and hence the count remains at 1.

## Solution
The solution involves correctly specifying the dependency array. The count should be added to the dependency array, to trigger the hook whenever `count` changes.  This will not trigger the `useEffect` on every render if the count doesn't change, only when it updates.