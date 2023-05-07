规定：

- $\mathbb P$ 质数集合
- $p_i$ 第 $i$ 个质数，$p_0=1,p_1=2,\dots$
- $\mathrm{LPF}(n)$ 为 $n$ 最小的质因子

设

$$
g(n,x)=\sum_{2\le i\le n}[i\in \mathbb P\lor \mathrm{LPF}(i)>p_x]i^k
$$

其中 $i^k$ 是原题要求的多项式中的一项。这个的目的是为了求出质数处的取值所以只需要满足质数处相等即可。然后：

$$
g(n,i)=\begin{cases}
g(n,i-1)&,&p^{i-1}>n\\
g(n,i-1)-p_i^k\left(g\left(\frac n{p_i},i-1\right)-g(p_{i-1},i-1)\right)&,&\text{otherwise}
\end{cases}
$$

从这里我们知道只要取到 $\sqrt n$ 级别的质数就能计算出所以 $\le \lfloor n/x\rfloor$ 的质数处取值的和了，我们射这个最后得到的是 $g(n)$。需要的第一维的个数是 $\sqrt n$ 级别的所以可以证明直接刷表复杂度是正确的。

然后我们再定义 $S(n,x)$：

$$
S(n,x)=\sum_{2\le i\le n}[\mathrm{LPF}(i)>p_x]f(i)\\
=g(n)-sp_x+\sum_{k>x\land p_k^e\le n}f(p_k^e)\left(S\left(\frac{n}{p_k^e},k\right)+[e\ne 1]\right)
$$

那个 $e\ne 1$ 是用来修正 $p_k^e$ 是合数但是 $S$ 里面没有计算 $1$ 的贡献的。然后这个直接暴力计算复杂度也是正确的。然后不需要记忆化。存放的时候可以把 $x\le\sqrt n$ 的放进一个数组，$x>\sqrt n$ 的把 $n/x$ 放进另一个数组。开 $\text O2$ $1s$ 跑 $10^{10}$ 还是很轻松的。