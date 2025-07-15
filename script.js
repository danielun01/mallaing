body {
  font-family: sans-serif;
  background: #f4f4f4;
  padding: 20px;
}

#malla-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.semestre {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  width: 200px;
  background: white;
}

.semestre h2 {
  margin-top: 0;
}

.ramo {
  margin: 5px 0;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
}

.ramo.locked {
  background: #ddd;
  color: #999;
  cursor: not-allowed;
}

.ramo.available {
  background: #ffeb3b;
}

.ramo.approved {
  background: #4caf50;
  color: white;
}

.ramo.corequisite {
  border: 2px dashed #2196f3;
}

