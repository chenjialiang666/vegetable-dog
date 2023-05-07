对于一个字符串 $s$，若其有长度为 $p$ 和长度为 $q$ 的周期，且 $p+q\le|s|$，那么 $s$ 有长度为 $\gcd(p,q)$ 的周期。

$\rm Proof.$ 设 $p<q$ 令 $d=q-p$。因为 $p+q\le |s|$ 所以 $\forall i\in[0,|s|)$，$i-p\ge 0$ 和 $i-q<|s|$ 至少有一个成立，故可以先往前跳 $p$ 再向后跳 $q$ 或先往后跳 $q$ 再向前跳 $p$，得到 $s_{i+d}=s_i$。那么 $q-p$ 是 $s$ 的周期。根据辗转相除法，$\rm gcd(p,q)$ 也是 $s$ 的周期。

**一个推论**：设 $s$ 的最短周期长度为 $l$ 且 $2l\le |s|$，则 $s$ 的 $\rm border$ 集合中 $\ge l+(||s|\bmod l)$ 的元素一定构成集合 $\{pl+(|s|\bmod l) \ |\ p\in\mathbb{Z}^+,pl+(|s|\bmod l)\le|S|\}$。

$\rm Proof.$ 这些元素是 $\rm border$ 不难验证，用反证法证明不存在其它元素。设有不满足该形式的 $\rm border$ 长度 $l'$，设 $l'=xl+(|s|\bmod l)+y,y\in[1,l)$。那么在 $s$ 的长度为 $(x+1)l+(|s|\bmod l)$ 的前缀中 $l$ 是它的一个 $\rm border$ 即 $l-y$ 是这个前缀的周期，而 $l$ 也是其周期，且因为 $x\ge 1$ 有 $(x+1)l+(|s|\bmod l)\ge 2l-y$，个根据 $\rm Periodicity\  Lemma$ 有 $\gcd(l,l-y)$ 是这个前缀的周期，同时 $\gcd(l,l-y)\bigg |l$ 是原串的一个周期，与 $l$ 是最短周期不符。

 