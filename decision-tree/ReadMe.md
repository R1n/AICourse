1. **Forward Pass**:
    - **Input Layer**: Input \(X\) is \([1, 0]\).
    - **Layer 1**:
        - Weights \(W1\) are \(\begin{bmatrix} 0.2 & 0.8 \\ 0.5 & 0.1 \end{bmatrix}\).
        - Output from Layer 1 is computed and passed through an activation function (e.g., ReLU, sigmoid).
    - **Layer 2**:
        - Weights \(W2\) are \(\begin{bmatrix} 0.3 & 0.7 \\ 0.6 & 0.4 \end{bmatrix}\).
        - Output from Layer 2 is computed and passed through another activation function.
    - **Output Layer**:
        - Weights \(W3\) are \([0.9, 0.3]\).
        - The final output, \( \hat{Y} \), is computed as \([0.7, 0.3]\).

2. **Loss Calculation**:
    - The actual output \(Y\) is \([0, 1]\).
    - The loss is calculated using a loss function (e.g., Mean Squared Error):
      \[
      L = 0.5 \times (0.7 - 0)^2 + 0.5 \times (0.3 - 1)^2 = 0.5 \times 0.49 + 0.5 \times 0.49 = 0.49
      \]

3. **Backward Pass**:
    - Compute the gradients of the loss function with respect to each weight (using the chain rule).
    - Gradients are calculated for \( W3 \), \( W2 \), and \( W1 \):
        - \( \frac{\partial L}{\partial W3} \)
        - \( \frac{\partial L}{\partial W2} \)
        - \( \frac{\partial L}{\partial W1} \)

4. **Weight Update**:
    - Using the gradients calculated, update the weights:
      \[
      W_{\text{new}} = W_{\text{old}} - \eta \frac{\partial L}{\partial W}
      \]
      where \( \eta \) is the learning rate.

5. **Update Layers**:
    - The updated weights \( W3_{\text{new}}, W2_{\text{new}}, W1_{\text{new}} \) are used for the next forward pass.
