$G$ 是一个有限的带权有向无环图。

- 起点 $A=\{a_1,\cdots,a_n\}$，终点 $B=\{b_1,\cdots,b_n\}。$
- 每条边 $e$ 有权 $w_e$，并假定值属于某 [交换环](https://zh.wikipedia.org/wiki/交换环) 。
- 对于一个有向路径 $P$，定义 $\omega(P)$ 为路径上所有边权的积。
- 对任意顶点 $a$，$b，$定义 $e(a,b)=\sum\limits_{P:a \to b}{\omega(P)}。$

设有这样一个矩阵：
$$
M=
\begin{pmatrix}
e(a_1,b_1) & e(a_1,b_2) & \cdots & e(a_1,b_n) \\
e(a_2,b_1) & e(a_2,b_2) & \cdots & e(a_2,b_n) \\
\vdots & \vdots & \ddots & \vdots \\
e(a_n,b_1) & e(a_n,b_2) & \cdots & e(a_n,b_n) \\
\end{pmatrix}
$$
从 $A$ 到 $B$ 的不相交路径 $P=(P_1,P_2,\cdots,P_n)，P$ 表示从 $a_i$ 到 $b_{\sigma(i)}$ 的一条路径，其中 $\sigma$ 是一个排列（置换），并且满足对任意 $i\not=j$，$P_i$ 与 $P_j$ 没有公共点。记 $\sigma(P)$ 表示 $P$ 对应的排列。

$M$ 的行列式是所有从 $A$ 到 $B$ 不相交路径 $P=(P_1,\cdots,P_n)$ 的带符号和。