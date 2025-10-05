# Quant Preparation [](title-id)

## v1.0.0 [](version-id)

### Table of contents [](toc-id)





- [Motivation](#Motivation)
  - [Advantages of use](#Advantages-of-use)
- [How to use](#How-to-use)
  - [Settings](#Settings)
  - [Highlight your code](#Highlight-your-code)
  - [Change fonts](#Change-fonts)
  - [Change favicon](#Change-favicon)
  - [Multiple templates](#Multiple-templates)
- [Color themes](#Color-themes)
- [Generate sidebar](#Generate-sidebar)
  - [Logo](#Logo)
  - [Page and doc title](#Page-and-document-title)
  - [Doc version](#Doc-version)
  - [Table of Contents](#Table-of-Contents)
    - [Nested levels](#Nested-levels)
- [Use Gulp](#Use-Gulp)

# Probability and Statistics

## Knowlege 1. Geometric Random Variable

**Knowlege 1**: $X$ 服从参数为 $p$ 的集合分布，$P(X=n)=(1-p)^{n-1}p$，$E(X)=\frac{1}{p}, Var(X)=\frac{1-p}{p^2}$

## Knowlege 2. Important Calculus

**Knowlege 2-1**
$$
\int_{-\infty}^{+\infty}e^{-x^2}dx=\sqrt{\pi}
$$

**Knowlege 2-2**: $Beta$ 函数 $B(x,y)$ 定义为：
$$
B(x,y)=\int_0^1t^{x-1}(1-t)^{y-1}dt
$$
其中，$x>0$ 且 $y>0$。$Beta$ 函数的性质有

1. $B(x,y)=B(y,x)$
2. $B(x,y)=\frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}$
3. $B(x,y+1)=\frac{y}{x+y}B(x,y)$

**Knowlege 2-3**: $Gamma$ 函数 $\Gamma(z)$ 定义为：
$$
\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}dt
$$
其中，$z>0$。$Gamma$ 函数的性质有

1. $\Gamma(z+1)=z\Gamma(z)$，特别地，$\Gamma(n)=(n-1)!$ 对于正整数 $n$。
2. $\Gamma(z)\Gamma(1-z)=\frac{\pi}{\sin(\pi z)}$，其中 $z$ 不是整数。$\Gamma(\frac{1}{2})=\sqrt{\pi}$
3. $B(x,y)=\frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}$

## Knowlege 3. Martingale and Random Walk

**Random walk**: The process $\{S_n;n\ge1\}$ is called a random walk if $\{X_i;i\ge1\}$ are IID random variables and $S_n=X_1+\cdots+X_n$, where $n=1,2,\cdots$ The term comes from the fact that we can think of $S_n$ as the position at time $n$ for a walker who makes successive random steps $X_1, X_2, \cdots$

If $X_i$ takes values 1 and -1 with probabilities $p$ and $1-p$ respectively, $S_n$ is called a **simple random walk** with parameter $p$. Furthermore, if $p=\frac{1}{2}$, the process $S_n$ is a **symmetric random walk**. For symmetric random walk, it's easy to show that $E(S_n)=0$ and $Var(S_n)=E(S_n^2)-E(S_n)^2=n$

Symmetric random walk is the process that is most often tested in quantitative interviews. The interview questions on random walk often revolve aroud finding the first $n$ for which $S_n$ reaches a defined threshold $\alpha$, or the probability that $S_n$ reaches $\alpha$ for any given value of $n$.

**Martingale**: a martingale $\{Z_n;n\geq1\}$ is a stochastic process with the properties that $E(|Z_n|)<\infty$ for all $n$ and $E(Z_{n+1}|Z_n=z_n,Z_{n-1}=z_{n-1},\cdots,Z_1=z_1)=z_n$. The property of a martingale can be extended to $E(Z_m;m>n|Z_n=z_n, \cdots,Z_1=z_1)=z_n$, which means the conditional expected value of future $Z_m$ is the current value $Z_n$.

A symmetric random walk is a martingale. From the definition of the symmetric random walk we have $S_{n+1} = \begin{cases} 
S_n + 1 & \text{with probability } \frac{1}{2} \\ 
S_n - 1 & \text{with probability } \frac{1}{2} 
\end{cases}$, so $E(S_{n+1}|S_n=s_n,\cdots,S_1=s_1)=s_n$. Since $E(S_{n+1}^2-(n+1))=\frac{1}{2}[(S_n+1)^2+(S_n-1)^2]-(n+1)=S_n^2-n$, **$S_n^2-n$ is a martingale as well**.

**Stopping rule**: For an experiment with a set of IID random variables $X_1, X_2, \cdots,$ a stopping rule for $\{X_i;i\geq1\}$ is a positive integer-value random variable $N$ (stopping time) such that for each $n>1$, the event $\{N\leq n\}$ is independent of $X_{n+1}, X_{n+2},\cdots$. Basically it says that whether to stop at $n$ depends only on $X_1, X_2, \cdots, X_n$.

**Wald's Equality**: Let $N$ be a stopping rule for IID random variables $X_1, X_2, \cdots$ and let $S_N=X_1+X_2+\cdots+X_N$, then $E(S_N)=E(X)E(N)$.

**Question**: What is martingale?

**Question**: In simple language what is a martigale, give me an example.

**Answer**: A **martingale** is a concept in probability theory, often used in finance, that describes a situation where the future value of something (like money or an investment) is always expected to be equal to its current value, no matter what happens in the future. In simpler terms, it’s like a fair game where, on average, you neither win nor lose money over time.

**Example:** Imagine you’re flipping a coin. Every time you win, you get \$1, and every time you lose, you pay \$1. This is a martingale because, no matter how many flips happen, the expected value of your total money after the next flip is always the same as it is now. You could win or lose, but the average outcome remains neutral. In finance, this idea is often used to model stock prices or gambling strategies where there’s no predictable trend in the future based on the past.

## Knowlege 4. Brownian Motion

A continous stochastic process $W(t),t\geq0$, is a Brownian motion if 

* $W(0)=0$;
* The increments of the process $W(t_1)-W(0), W(t_2)-W(t_1), \cdots,W(t_n)-W(t_{n-1})$, $\forall0\leq t_1\leq t_2\leq\cdots\leq t_n$ are independent;
* Each of these increments is normally distributed with distribution $W(t_{i+1})-W({t_i})\sim N(0,t_{i+1}-t_i)$.

Important properties:

* Continous;
* $E(W(t))=0$;
* $E(W(t)^2)=t$;
* $W(t)\sim N(0, t)$;
* Martingale property $E[W(t+s)|W(t)]=W(t)$
* $cov(W(s), W(t))=s, \forall0<s<t$
* Markov property

There are two other important martingales related to Brownian motion that are valuable tools in many applications.

* $Y(t)=W(t)^2-t$ is a martingale.
* $Z(t)=\exp{\{\lambda W(t)-\frac{1}{2}\lambda^2t\}}$, where $\lambda$ is any constant and $W(t)$ is a Brownian motion, is a martingale. (Exponential martingale)

**Question**: What's the properties for standard brownian motion?

**Answer**: It is a Gaussian Markov process, it has continuous paths, it is  a process with stationary independent increments (a Lévy process), and it is  a martingale.

## Knowlege 5. Limit Theorems

**Markov's inequality**: Markov’s inequality states that for any **non-negative** random variable $Y$ and any $a > 0$,
$$
P(Y \geq a) \leq \frac{\mathbb{E}[Y]}{a}
$$
**Chebyshev's inequality**: Formally, for a random variable $X$ with mean $\mu$ and variance $\sigma^2$, Chebyshev’s inequality states that for any  $k > 0$:
$$
P(|X - \mu| \geq k\sigma) \leq \frac{1}{k^2}
$$
**(Weak) Law of Large Numbers**: Let $X_1, X_2, \cdots,X_i,\cdots$ be sequence of independent random variables with $E(X_i)=\mu, Var(X_i)=\sigma^2$. Let $\bar{X}_n=\frac{\sum_{i=1}^n X_i}{n}$. Then, for any $\varepsilon>0$,
$$
P(|\bar{X}_n-\mu|>\varepsilon)\rightarrow0\text{ as }n\rightarrow\infty
$$
$\bar{X}_n$ converges to $\mu$ in probability.

**Proof**: According to Chebyshev's inequality,
$$
P(|\bar{X}_n-\mu|>\varepsilon)\leq\frac{Var(\bar{X}_n)}{\varepsilon^2}=\frac{\sigma^2}{n\varepsilon^2}\rightarrow0\text{ as }n\rightarrow\infty
$$
**Convergence in Distribution**: Let $X_1, X_2, \dots$ be a sequence of random variables with cumulative distribution functions $F_1, F_2, \dots$, and let $X$ be a random variable with distribution function $F$. We say that $X_n$ converges in distribution to $X$ if
$$
\lim_{n \to \infty} F_n(x) = F(x)
$$
at every point at which $F$ is continuous.

**Central Limit theorem**: Let $X_1, X_2, ..., X_n$ be a sequence of $n$ independent and identically distributed random variables with finite mean $\mu$ and variance $\sigma^2$. Let $S_n$ denote the sum of the random variables, that is $S_n=X_1+X_2+\cdots+X_n$. Then the Central Limit theorem states that the random variable
$$
Y_n=\frac{S_n-\mu n}{\sigma\sqrt{n}}
$$
converges (in distribution) to the standard normal distribution.
$$
\lim_{n\rightarrow\infty} P(Y_n\leq x)=\Phi(x), -\infty<x<+\infty
$$

## Knowlege 6. Distributions Derived from the Normal Distribution

$Z\sim N(0,1)\Rightarrow U=Z^2\sim\chi_1^2$

$U_1, U_2,\cdots,U_n\sim \chi_1^2,i.i.d.\Rightarrow V=\sum_{i=1}^nU_i\sim\chi_n^2$  (need prove)

$Z\sim N(0,1),U\sim\chi_n^2,independent\Rightarrow \frac{Z}{\sqrt{U/n}}\sim t(n)$

$U\sim\chi_m^2,V\sim\chi_n^2,independent\Rightarrow W=\frac{U/m}{V/n}\sim F_{m,n}$

$X_i\sim N(\mu,\sigma^2),i.i.d.\Rightarrow\bar{X},S^2\text{ are independent}$

$\frac{(n-1)S^2}{\sigma^2}\sim\chi_{n-1}^2$

$\frac{\bar{X}-\mu}{S/\sqrt{n}}\sim t_{n-1}$

## Knowlege 7. Parameter Estimation

Let $\hat{\theta}_n$ be an estimate of a parameter $\theta$ based on a sample of size $n$. Then $\hat{\theta}_n$ is said to be **consistent in probability** if $\hat{\theta}_n$ converges in probability to $\theta$ as $n$ approaches infinity; that is, for any $\epsilon > 0$,
$$
P(|\hat{\theta}_n - \theta| > \epsilon) \to 0 \quad \text{as} \quad n \to \infty
$$

**Theorem**: Under appropriate smoothness conditions on $f$, the mle from an i.i.d. sample is consistent.

**Theorem**: Under smoothness conditions on $f$, the probability distribution of $\sqrt{nI(\theta_0)}(\hat{\theta}-\theta_0)$ tends to a standard normal distribution, where $I(\theta)=E[\frac{\partial}{\partial\theta}\log f(X|\theta)]^2=-E[\frac{\partial^2}{\partial\lambda^2}\log f(X|\theta)]$. We say the mle is **asymptotically unbiased** and refer to the variance of the limiting normal distribution as the **asymptotic variance of the mle**.

Mean squared error is the most commonly used measure of concentration. The mean squared error of $\hat{\theta}$ as an estimate of $\theta_0$ is 
$$
MSE(\hat{\theta})=E(\hat{\theta}-\theta_0)^2=Var(\hat{\theta})+(E(\hat{\theta})-\theta_0)^2
$$
Given two estimates, $\hat{\theta}$ and $\tilde{\theta}$, of a parameter $\theta$, the **efficiency** of $\hat{\theta}$ relative to $\tilde{\theta}$ is defined to be

$$
\text{eff}(\hat{\theta}, \tilde{\theta}) = \frac{\text{Var}(\tilde{\theta})}{\text{Var}(\hat{\theta})}
$$
This comparison is most meaningful when both $\hat{\theta}$ and $\tilde{\theta}$ are unbiased or when both have the same bias.

**Cramer-Rao Inequality**: Let $ X_1, \dots, X_n $ be i.i.d. with density function $ f(x | \theta) $. Let $ T = t(X_1, \dots, X_n) $ be an unbiased estimate of $ \theta $. Then, under smoothness assumptions on $ f(x | \theta) $,
$$
\text{Var}(T) \geq \frac{1}{nI(\theta)}
$$
An unbiased estimate whose variance achieves this lower bound is said to be **efficient**. Since the asymptotic variance of a maximum likelihood estimate is equal to the lower bound, maximum likelihood estimates are said to be **asymptotically efficient**. For a finite sample size, however, a maximum likelihood estimate may not be efficient, and maximum likelihood estimates are not the only asymptotically efficient estimates.

A statistic $$ T(X_1, \dots, X_n) $$ is said to be **sufficient** for $$ \theta $$ if the conditional distribution of $$ X_1, \dots, X_n $$, given $$ T = t $$, does not depend on $$ \theta $$ for any value of $$ t $$.

**Theorem**: A necessary and sufficient condition for $$ T(X_1, \dots, X_n) $$ to be sufficient for a parameter $$ \theta $$ is that the joint probability function (density function or frequency function) factors in the form:
$$
f(x_1, \dots, x_n | \theta) = g[T(x_1, \dots, x_n), \theta] h(x_1, \dots, x_n)
$$
**Rao-Blackwell Theorem**: Let $\hat{\theta}$ be an estimator of $\theta$ with $E(\hat{\theta}^2) < \infty$ for all $\theta$. Suppose that $T$ is sufficient for $\theta$, and let $\tilde{\theta} = E(\hat{\theta} | T)$. Then, for all $\theta$,

$$
E(\tilde{\theta} - \theta)^2 \leq E(\hat{\theta} - \theta)^2
$$

The inequality is strict unless $\hat{\theta} = \tilde{\theta}$.

## Knowlege 8. Testing Hypothesis

**Type I error**: rejecting $H_0$ when it is true.

**Significance level**: The probability of a type I error is called **significance level** of the test.

**Type II error**: accepting the null hypothesis when it is false, $\beta$.

The probability that the null hypothesis is rejected  when it is false is called the **power** of the test, and equals $1-\beta$

The probability distribution of the test statistic when the null hypothesis is true is called **null distribution**.

**Neyman-Pearson Lemma**: Suppose that $H_0$ and $H_1$ are simple hypotheses and that the test that rejects $H_0$ whenever the likelihood ratio is less than $c$ has significance level $\alpha$. Then *any other test* for which the significance level is less than or equal to $\alpha$ has power less than or equal to that of the likelihood ratio test.

**Question**: Type 1 error and type 2 error

**Question**: Explain the concept of $p$-value in the context of A/B testing.

**Answer**: The $p$-value measures the probability of obtaining an effect at  least as extreme as the one in your sample data, assuming the null hypothesis  is true. In A/B testing, a low $p$-value (< 0.05) suggests that the observed  data is unlikely under the null hypothesis, implying a statistically significant difference between groups.

**Question**: Difference between significnace and power?

**Answer**: Significance is the probability that we reject the null hypothesis when it is true. Power is the probability that we reject the null hypothesis when it is false.

## Knowlege 10. St. Petersburg paradox

The paradox is based on a hypothetical game involving a fair coin flip:

1. A player pays a fixed fee to enter the game.
2. A fair coin is flipped until it lands on heads. Let $n$ represent the number of flips needed to get heads.
3. The payout of the game is $2^n$ dollars (for example, if heads comes up on the first flip, you get \$2; if on the second flip, \$4; if on the third, \$8; and so on).

**Expected Value Calculation**

To calculate the **expected value** (EV) of the game, we sum up the probabilities of each outcome multiplied by its payout:
$$
\text{EV} = \sum_{n=1}^{\infty} \left(\frac{1}{2^n}\right) \times 2^n = \sum_{n=1}^{\infty} 1 = \infty
$$
**The Paradox**

Since the expected value is infinite, a rational person should be willing to pay any finite amount to play this game, as it promises an infinite return on average. However, in reality, most people are only willing to pay a modest amount (like $5, $10, or $20) to enter, not an infinitely large fee. This discrepancy between the expected value and what people are willing to pay is the core of the paradox.

**Why Does This Happen?**

The St. Petersburg Paradox occurs because:

1. **Diminishing Marginal Utility of Money**: In real life, people experience diminishing returns from additional wealth. The value of each additional dollar decreases as wealth increases. This is captured by utility functions, where the utility of an additional dollar decreases as you have more of them. For example, the jump in satisfaction from \$0 to \$10 is much greater than from \$1,000 to \$1,010.
2. **Finite Resources**: People do not have infinite resources and cannot justify risking huge amounts for a theoretical infinite payout.
3. **Risk Aversion**: Most people are risk-averse. They prefer a certain, smaller reward over a highly uncertain, potentially large reward.

**Solution**

1. Expected Utility Theory

   Assume the utility function is $U(w)=\ln(w)$, then expected incremental utility will be
   $$
   \Delta E(U)=\sum_{k=1}^{+\infty}\frac{1}{2^k}[\ln(w+2^k-c)-\ln(w)]<+\infty
   $$
   

## Question 2. A Problem of Three Liars

**Question 2**: $A$, $B$ and $C$ tell the truth with the probability $\frac{1}{3}$ and lie with the probability of $\frac{2}{3}$. $A$ makes a statement and $B$ an observation whether $A$'s statement was true or not. **$C$ tells us that $B$ confirmed that $A$ was telling the truth**. What is the probability that $A$ was actually telling the truth?

https://www.cut-the-knot.org/Probability/ThreeLiars.shtml

**Answer**: We can only solve the problem by considering all conditions. The tree below represents all possible cases wherein $C$ tells us that $B$ confirmed $A$′s statement.

![three liars, illustration](https://www.cut-the-knot.org/Probability/ThreeLiarsI.jpg)

Counting the probabilities gives for the total

$$P=\frac{1}{3}⋅(\frac{1}{3}⋅\frac{1}{3}+\frac{2}{3}⋅\frac{2}{3})+\frac{2}{3}⋅(\frac{1}{3}⋅\frac{2}{3}+\frac{2}{3}⋅\frac{1}{3})=\frac{13}{27}$$

This corresponds to 13 cases out of 27 wherein $C$ tells us that $B$ confirmed $A$'s' statement. The first addend in the above corresponds to 1⋅1+2⋅2=5 cases wherein $A$'s statement was indeed true. So, with the information at hand, we may conclude that the probability that $A$ was telling the truth is $\frac{5}{13}$.

**Sometimes list all possibilities is great !**

## Question 3

**Question 3**: Suppose we play a game. I roll a die up to three times. Each time I roll, you can either take the number showing as dollars, or roll again. What is your expected winnings?

**Answer 3**: **If there is only one roll of the dice**, the expected winnings is $E(X)=3.5$. **If there are two dice**, I can either take the result of the first roll, or proceed onto the second die. The optimal strategy is to take the first roll if it is 4 or greater, otherwise we continue. The expected winnings is 
$$
E(X)=1\times\frac{1}{2}\times\frac{1}{6}+2\times\frac{1}{2}\times\frac{1}{6}+3\times\frac{1}{2}\times\frac{1}{6}+4\times(\frac{1}{6}+\frac{1}{2}\times\frac{1}{6})+5\times(\frac{1}{6}+\frac{1}{2}\times\frac{1}{6})+6\times(\frac{1}{6}+\frac{1}{2}\times\frac{1}{6})=\frac{17}{4}
$$
This is calculated by considering each probability of winnings. There is another way to calculated this expectation. If first roll is 4 or larger, we take the first roll, otherwise we face the situation of one roll of the dice. The expected winnings is 
$$
E(X)=4\times\frac{1}{6}+5\times\frac{1}{6}+6\times\frac{1}{6}+3.5\times\frac{1}{2}=\frac{17}{4}
$$
**If there are three dice**, we have to come up with what the optimal strategy is. A wrong idea is that considering the first roll, if it's 4 or larger, we take the first roll, otherwise we continue. Considering the second roll, if it's 4 or larger, we take the second roll, otherwise we continue. 

The correct solution should consider the last two dice as a whole because we have talked about this situation. The expected winnings of the last two dice is $\frac{17}{4}$ so the optimal strategy should be that if the first roll is 5 or 6, we take the first roll, otherwise we get into the two dice situation. The expected winnings is
$$
E(X)=5\times\frac{1}{6}+6\times\frac{1}{6}+\frac{17}{4}\times\frac{2}{3}=\frac{14}{3}
$$

**Problem 3.1**: Suppose you have a 100-sided die, with sides numbered 1–100. The payout scheme is that you get \$1 for each pip that you roll. For example, if you roll a 56, you receive \$56. After your first roll, you can decline the payoff, pay \$1 to roll the die again, and then the new rolled value becomes your replacement payoff. You can choose this re-roll option as many times as you like, but each time it costs another $1. How much should this game cost to play? That is, what is the expected value of the game assuming you play optimally?

## Question 5

**Question 5**: Suppose you have a fair coin. You start with a dollar, and if you toss a H, your position doubles, if you toss a T, your position halves. What is the expected value of the money you have if you toss the coin infinitely？

**Answer 5**: We work out what happends with one toss, then $n$ tosses, and then let $n$ tend to infinity.

Let $X$ denote a toss, then $E(X)=\frac{1}{2}\times 2+\frac{1}{2}\times\frac{1}{2}=\frac{5}{4}$

Provided the tosses are independent, the product of expectations is the expectation of the product. Let $X_j$ be the effect of toss $j$. This means that
$$
E(\prod_{j=1}^nX_j)=\prod_{j=1}^nE(X_j)=(\frac{5}{4})^n\rightarrow+\infty (n\rightarrow\infty)
$$

## Question 6 Coin Triplets

**Question 6**: For a fair coin, what is the expected number of tosses to get $HHH$ in row?

**Answer 6 (Solution 1)** (Markov Chain: 4 States)

**Answer 6 (Solution 2)** (Conditional Probability and Total Probability Formula)

**Answer 6 (Solution 3)**: There are many ways to do this. One particularly nice way using pricing ideas is via a gambling strategy. It is always good to answer questions in a quant job interview using methods that appear finance related.

We gamble in such a way that we make money on heads but such that if we get a T on toss $n$, our position is $-n$.

We therefore gamble one unit on the first toss and on each toss after a T. After one head, we gamble three. This guarantees that if we get a T next then we go to minus $n$. After two heads, we are therefore up four, and so we gamble seven to get us to $-n$ again if the next toss is tails. Our gambling winnings is a martingale, since we are making finite trades in a martingale. （Any bounded trading strategy in a martingale is a martingale.）

After three heads, our position is $11-(n-3)=14-n$. The time taken to get three heads is a stopping time with finite expectation, so if we stop at it, we still have a martingale (Optional Sampling theorem). Thus
$$
E(14-n)=0
$$
and we are done.

**Question 6-1**: For a fair coin, what is the probability that $HHH$ shows before $THH$?

**Answer 6-1** (Conditional Probability)

**Question 6-2**: For a fair coin, what is the probability that $HTH$ shows before $HHT$?

**Answer 6-2** (Conditional Probability)

**Question 6-3**: For a fair coin, what is the probability that $HHT$ shows before $HTT$?

**Answer 6-3** (Conditional Probability)

**Question 6-4**: For a fair coin, what is the expected number of tosses to get $HTH$ in row?

***(Markov Chain might be too complicated to solve this problem. Why? Too many states.)***

**Answer 6-4** (Total Probability Formula): Let $N$ be the number of tosses to get $HTH$ in row.

$E(N)=E(N|H)P(H)+E(N|T)P(T)+1=\frac{1}{2}E(N|H)+\frac{1}{2}E(N|T)+1=\frac{1}{2}E(N|H)+\frac{1}{2}E(N)+1$ 

$E(N|H)=E(N|HH)P(H)+E(N|HT)P(T)+1=\frac{1}{2}E(N|HH)+\frac{1}{2}E(N|HT)+1=\frac{1}{2}E(N|H)+\frac{1}{2}E(N|HT)+1$

$E(N|HT)=E(N|HTH)P(H)+E(N|HTT)P(T)+1=\frac{1}{2}E(N)+1$

$\Rightarrow E(N)=10$

**Problem 6-5**: For a fair coin, what is the expected number of coin tosses to get $n$ heads in a row?

**Answer 6-5 (Solution 1)**: (Total Probability Formula)
$$
E(nH)=1+\frac{1}{2}E(nH|T)+\frac{1}{2}E(nH|H)=1+\frac{1}{2}E(nH)+\frac{1}{2}E(nH|H)
$$

$$
E(nH|H)=1+\frac{1}{2}E(nH|HT)+\frac{1}{2}E(nH|HH)=1+\frac{1}{2}E(nH)+\frac{1}{2}E(nH|HH)
$$

Let $E(nH)=a_0, E(nH|kH)=a_k$, then we have
$$
a_0=1+\frac{1}{2}a_0+\frac{1}{2}a_1\\
a_1=1+\frac{1}{2}a_0+\frac{1}{2}a_2\\
\cdots\\
a_{n-1}=1+\frac{1}{2}a_0+\frac{1}{2}a_n
$$
i.e. $a_k=1+\frac{1}{2}a_0+\frac{1}{2}a_{k+1}\Rightarrow a_{k+1}-(2+a_0)=2[a_k-(2+a_0)]$. So we have $a_n-(2+a_0)=2^{n+1}$ and we get $a_n=2^{n+1}-2$

**Answer 6-4 (Solution 2)**: Let's use $HH\cdots H_n$ to explain a general approach for the expected time to get any coin sequence by exporing the stopping times of martigales. 

Imagine a gambler has \$1 to bet on a sequence of $n$ heads $(HH\cdots H_n)$ in a fair game with the following rule: Bets are placed on up to $n$ consecutive games and each time the gambler bets all his money. He stops playing either when he loses a game or when he wins $n$ games in a roll, in which case he collects $\$2^n$. Now let's imagine, instead of one gambler, before each toss a new gambler joins the game and bets on the same sequence of $n$ heads with a bankroll of \$1 as well. After the $i$-th game, $i$ gamblers have participated in the game and the total amount of money they have put in the game should be \$$i$. Since each game is fair, the expected value of their total bankroll is \$$i$ as well. In other words, if we denote $x_i$ as the amount of money all the participating gamblers have after the $i$-th game, then $(x_i-i)$ is a martingale.

Now, let's add a stopping rule: the whole game will stop if one of the gamblers becomes the first to get $n$ heads in a roll. A martingale stopped at a stopping time is a martingale. So we still have $E(x_i-i)=0$. If the sequence stops after the $i$-th loss, the $(i-n+1)$-th player is the player who gets $n$ heads in a roll with payoff $2^n$. So all the $(i-n)$ players before him went bankrupt; the $(i-n+2)$-th player gets $(n-1)$ heads in a roll with payoff $2^{n-1}$; ...; the $i$-th player gets one head with payoff 2. So the total payoff is fixed and $x_i=2^n+2^{n-1}+\cdots+2=2^{n+1}-2$.

Hence, $E(x_i-i)=2^{n+1}-2-E(i)=0\Rightarrow E(i)=2^{n+1}-2$

## Question 7

**Question 7**: You throw a fair coin one million times. What is the expected number of string of 6 heads followed by 6 tails?

**Answer 7**: There are 1000000 - 11 possible slots. Let $X_i$ be whether $i$th slot is the sequence we want. The expected number is $E(\sum X_i)=\sum E(X_i)=(1000000-11)\times 2^{-12}$

## Question 8

**Question 8**: Suppose we have an ant traveling on edges of a cube, going from one vertex to another. The ant never stops and it takes him one minute to go along one edge. At every vertex, the ant randomly picks one of the three available edges and starts going along that edge. We pick a vertex of the cube and put the ant there. What is the expected number of minutes that it will take the ant to return to that same vertex?

**S1** (Markov Chain: Eight states)

**S2** (Markov Chain: Four states): Instead of considering each vertex as a state, once we confirm the start vertex, we can consider all eight vertex as four state. State 1 is the start vertex. State 2 is vertex that is 1 far from the start vertex. State 3 is vertex that is 2 far from the start vertex.  State 4 is vertex that is 3 far from the start vertex.  

## Question 9

**Question 9**. A plane has one hundred seats and there are exactly one hundred people boarding. They line up at the gate in exactly the same order as the order of the seats on the plane, from 1 to 100. However, the first person is Grandma who doesn't see well, so instead of taking the first seat on the plane, she picks a random seat and sits down. Now, the rule is: when any other person enters the plane, he or she will try to sit at his own seat. If this is not possible, this person chooses one of the free seats randomly. Eventually, everyone boards the plane. What is the probability that the last person (number 100) will sit at his assigned seat number?

**Answer 9**: Consider the 1st person. 

* If the 1st person sits on 1, the last person will sit at his seat.
* If the 1st person sits on 100, the last person will sit at 1.
* If the 1st person sits on $i$ ($2\leq i\leq99$), the 2nd person to the $i-1$ th person will seat their own seats. From the $i$ th person, it's just like the same situation because $i$ th person becomes the new 1st person.

It can be concluded that if there is one person in the first 99 people who sits on 1, the last person can seat on 100. If there is one person in the first 99 people who sits on 100, the last person can only sit on 1.

Each person sits on 1 or 100 with the same probability. So the answer is $\frac{1}{2}$.

**Problem 9-1**. A plane has one hundred seats and there are exactly one hundred people boarding. They line up at the gate in exactly the same order as the order of the seats on the plane, from 1 to 100. However, the first person is Grandma who doesn't see well, so instead of taking the first seat on the plane, she picks a random seat and sits down. Now, the rule is: when any other person enters the plane, he or she will try to sit at his own seat. If this is not possible, this person chooses one of the free seats randomly. Eventually, everyone boards the plane. What is the probability that **the second last person (number 99)** will sit at his assigned seat number?

**S1**: Consider the 1st person. 

* If the 1st person sits on 1, the second last person will sit at his seat.
* If the 1st person sits on 99, the second last person will sit at 1 or 100.
* If the 1st person sits on 100, the second last person will sit at his seat.
* If the 1st person sits on $i$ ($2\leq i\leq98$), the 2nd person to the $i-1$ th person will seat their own seats. From the $i$ th person, it's just like the same situation because $i$ th person becomes the new 1st person.

It can be concluded that if there is one person in the first 98 people who sits on 1 or 100, the second last person can seat at his seat. If there is one person in the first 98 people who sits on 99, the last person can only sit on 1 or 100. So the answer is $\frac{2}{3}$.

## Question 10. Cauchy Distribution

**Question 10.1**: Give an example of a distribution with infinite variance.

**Answer 10.1**: The Cauchy distribution has density function
$$
\frac{1}{\pi}\frac{1}{1+x^2}
$$
Clearly, the second moment does not exist as we would have to integrate
$$
\frac{x^2}{1+x^2}
$$
which tends to one as $x$ goes to plus or minus infinity.

Note: $X$ and $Y$ are independent standard normal distribution variables i.e. $Y\sim N(0, 1)$, $X\sim N(0, 1)$. Then $Z=\frac{X}{Y}$ conforms to Cauchy distribution, which is $Z\sim\text{Cauchy}(0, 1)$

Properties:

* No mean and no variance
* Probability density function is $f(z)=\frac{1}{\pi(1+z^2)}$

**Question 10.2**: Independent normal $X$ and $Y$, calculate $P(X>3Y)$. $P(X>3Y|Y>0)$

## Question 12. Coupon-Collecting

**Question 12**: There are $N$ types of coupon. Every time you pick up one coupon. What's the expectation of times you need to pick up for to collect all types of coupon?

**Answer 12**: Let $X_i$ be times you need to collect from $(i-1)$th type to $i$ th type. 

$X_1$ represents times you need to get the first type of coupon, which is 1 for sure.

$X_k$ represents times you need to get the $k$th type after $(k-1)$th one. $P(X_k=n)=(\frac{k-1}{N})^{n-1}\frac{N-k+1}{N}$

To be clear, $X_k$ follows a geometric distribution with parameter $\frac{N-k+1}{N}$. 
$$
E(X_k)=\frac{N}{N-k+1}, Var(X_k)=\frac{\frac{k-1}{N}}{(\frac{N-k+1}{N})^2}
$$
So the answer is $E(\sum_{i=1}^N X_i)=\sum_{i=1}^N E(X_i)=\sum_{i=1}^N(\frac{N}{N-k+1})=N\sum_{i=1}^N \frac{1}{i}$

We can also solve out the variance of times you need to pick for to collect all types of coupon, which is $Var(\sum_{i=1}^N X_i)=\sum_{i=1}^N Var(X_i)=\sum_{i=1}^N\frac{\frac{i-1}{N}}{(\frac{N-i+1}{N})^2}=N\sum_{i=1}^N\frac{N-i}{i^2}$

**Question 12-1**: There are $N$ types of coupon. Every time you pick up one coupon. Let $X$ be times you need to pick up for to collect all types of coupon. Can we figure out the distribution of $X$?

**Answer 12-1**: It is difficult to solve $P(T=n)$ but $P(T>n)$ is relatively easy to solve.

$P(T>n)=P($we don't collect all $N$ types of coupon in $n$ times$)=P($There is at least one type of coupon not in $n$ times$)$

Let $A_i$ be the event that there is no $i$th type of coupon in $n$ times. Then 

$P(T>n)=P(\cup_{i=1}^N A_i)=\sum P(A_i)-\sum_{i<j}P(A_iA_j)+\sum_{i<j<k}P(A_iA_jA_k)-\cdots+(-1)^{N+1}P(A_1A_2\cdots A_N)$

$P(A_i)=(1-\frac{1}{N})^n, P(A_iA_j)=(1-\frac{2}{N})^n, \cdots, P(A_1A_2\cdots A_N)=0$

Therefore, $P(T>n)=n(1-\frac{1}{N})^n-C_n^2(1-\frac{2}{N})^n+C_n^3(1-\frac{3}{N})^n-\cdots+(-1)^N C_N^{N-1}(\frac{1}{N})^n=\sum_{i=1}^{N-1}C_n^i(1-\frac{i}{N})^n$

$P(T=n)=P(T>n)-P(T>n-1)$

**Question 12-2**: There are $N$ types of coupon. Every time you pick up one coupon. What's the expectation of numbers of types if you pick up for $n$ times.

**Answer 12-2**: Let $X_i$ be whether $i$ th type of coupon is in these $n$ coupons. $E(X_i)=P(X_i=1)=1-(\frac{N-1}{N})^n$.

$\therefore E(\sum_{i=1}^N X_i)=\sum_{i=1}^N E(X_i)=N(1-(1-\frac{1}{N})^n)$

**Question 12-3**: There are $N$ types of coupon. Every time you pick up one coupon. Let $D_n$ be numbers of types if you pick up for $n$ times. Can we figure out the distribution of $D_n$?

**Answer 12-3**: $P(D_n=k)=C_N^kP(D_n=k|k种优惠券种类确定)$

$P(D_n=k|k种优惠券种类确定)=P(每次抽取都为这k种其一)\times P(D_n=k|每次抽取都为这k种其一)=(\frac{k}{N})^n(1-\sum_{i=1}^{k-1}C_n^i(1-\frac{i}{k})^n)$

$P(D_n=k)=C_N^k(\frac{k}{N})^n(1-\sum_{i=1}^{k-1}C_n^i(1-\frac{i}{k})^n)$

**Question 12-4**: For a fair 6-sided dice, 2 faces are red, 2 faces are green, 2 faces are blue. Roll the dice 21 times, let $N(R)$=number of times that red faces up. $N(G)$=number of times that green faces up. $N(B)$=number of times that blue faces up. What's the expectation of $N(R)N(G)N(B)$

## Question 13. Exchange Paradox

Two sealed envelopes are handed out. You get one and your competitor gets the other. You understand that one envelope contains $m$ dollars, and the other contains $2m$ dollars (where $m$ is unstated).

1. If you peek into your envelope, you see $\$X$. However, you do not know whether your opponent has $\$2X$ or $\$\frac{1}{2}X$. Without peeking, what is your expected benefit to switching envelopes? What is your opponent's expected benefit to switching envelopes (assuming your opponent sees $\$ Y$)? Should you switch? If you do, do you do it again for the same reason (assuming neither of you peeked)?

2. Suppose that you both peek into your envelopes initially. What is the payoff to switching? Should you switch? If you do, do you do it again for the same reason? 

**Answer 13**: Assume that neither of you peek into your envelops. Assume that you have $\$ X$ in your envelope. where $\$ X$ has a fifty-fifty chance of being either $\$ m$ or $\$ 2m$. This means that your opponent's envelope has a fifty-fifty chance of containing $\$ 2X$ or $\$ \frac{1}{2}X$. The expected value of switching is 
$$
(\frac{1}{2}\times\$ 2X)+(\frac{1}{2}\times\$\frac{1}{2}X)=\$ 1.25X
$$
The expected benefit of switching is, therefore, $\$ 0.25X$. On this basis, it looks like you should switch envelops. Similarly, your opponent should also switch. This is the first part of the "Exchange Paradox": it seems that you both benefit from switching.

. If you still do not peek, then a repeat of exactly the same argument suggests an expected benefit of 0.25 of the contents of your envelop if you switch again. The same applies to your opponent. This is the second part of the "Exchange Paradox": it seems that you could happily switch forever.

The problem is twofold: First, you are assuming that value is expected payoff; second, your "prior" beliefs are that you have a fifty-fifty chance of having either $\$ m$ or $\$ 2m$. The first problem is a function of your individual risk preferences and is diffifcult to adress. The second problem can be tackled using two approaches: the first approach is to reconsider the nature of your prior; the second approach is to "update" your prior probability assessment.

The first approach is to reconsider the nature of your priors. Our previous calculation yielded $\$ 1.25X$ as the expected payoff to switching. However, this assumes that for any given $X$, it is equally likely that your opponent has $\$ 2X$ or $\$ \frac{1}{2}X$. But this is not true because $m$ is something fixed. For any particular $m$, it is equally likely that you received one of $\$ m$ or $\$ 2m$. The expected value of switching should be
$$
E(V)=E(V|\$ m)P(\$m)+E(V|\$2m)P(\$2m)=0
$$
The second approach is to update your prior. To update your prior, you need information. The most obvious source of information is to peek into your envelope. So, assume that both you and your opponent peek into your envelopes. Now it gets subjective. If you see an amount that seems very high, hten you update your prior probabilities: the probability that you have the high-value envelope increases, and the probability that you have the low-value envelope decreases. The problem now is that you must subjectively assess the amount in the envelope as being either "low" or "high".

## Question 14 Risk-Preference Related Problems 

**Problem 14**: I will spin a fair roulette wheel with only five sections. Four of the five sections pay $1; the fifth pays \$5. If the cost is \$1.50 per spin, and you may play exactly once, should you play the game?

**Answer 14**: Whether you play or not depends upon whether the expected $0.30 gain is sufficent to compensate you for the risk of losing \$0.50. With amounts this small, you would probably take the bet. It is like spending \$1.50 on a lottery ticket --- it is too small to care about. If the numbers were larger, say everything multiplied by one billion, and if your job is lost if you lose, then you are significantly more risk-averse, and your boss would not want you to take the bet.

**Problem 14-1**: Two players $A$ and $B$ play a marble game. Each player has both a red and a blue marble. They present one marble to each other. If both present red, $A$ wins \$3. If both present blue, $A$ wins \$1. If the colors do not match, $B$ wins \$2. The winnings come from an external source, not from the other player. Is it better to be $A$, or $B$, or does it not matter? 

**Answer 14-1**: If you are risk averse, player $B$'s position is favored (it offers the same expected return, but less risk).

## Question 15. Drunk Man

**Problem 15**: A drunk man is at the 17th meter of a 100-meter-long bridge. He has a 50% probability of staggering forward or backward one meter each step. What is the probability that he will make it to the end of the bridge (the 100th meter) before the beginning (the 0th meter)? What is the expected number of steps he takes to reach either the beginning or the end of the bridge?

**Answer 15 (Solution 1)**: Markov Chain 101 states. But it can only solve the first question.

**Answer 15 (Solution 2)**: Let's set the current position (the 17th meter) to 0; then the problem becomes a symmetric random walk that stops at either 83 or -17. We also know that both $S_n$ and $S_n^2-n$ are martingales. Since a martingale stopped at a stopping time is a martingale, **$S_N$ and $S_N^2-N$ (where $S_N=X_1+\cdots+X_N$ with $N$ being the stopping time) are martingales as well**. Let $P_\alpha$ be the probability that it stops at $\alpha=83$, $P_\beta$ be the probability it stops at $-\beta=-17 (p_\beta=1-p_\alpha)$, and $N$ be the stopping time. Then we have 
$$
\begin{aligned}
E[S_N] &= p_\alpha \times 83 - (1 - p_\alpha) \times 17 = S_0 = 0 \\
E[S_N^2 - N] &= E[p_\alpha \times 83^2 + (1 - p_\alpha) \times 17^2] - E[N] = S_0^2 - 0 = 0 \\
&\Rightarrow \begin{cases}
p_\alpha = 0.17 \\
E[N] = 1441
\end{cases}
\end{aligned}
$$

## Question 16. Ticket Line

**Problem 16**: At a theater ticket office, $2n$ people are waiting to buy tickets. $n$ of them have only \$5 bills and the other n people have only \$10 bills. The ticket seller has no change to start with.If each person buys one \$5 ticket, what is the probability that all people will be able to buy their tickets without having to change positions？

**Answer 16**: Assign +1 to the $n$ people with \$5 bills and -1 to the $n$ people with \$10 bills. Consider the process as a walk. Let $(a,b)$ represent that after $a$ steps, the walk ends at $b$. So we start at $(0, 0)$ and reaches $(2n,0)$ after $2n$ steps. For these $2n$ steps, we need to choose $n$ steps as +1, so there are $C_{2n}^n$ possible paths. We are interested in the paths that have the property $b\geq0, \forall0<a<2n$ steps. It's easier to calculate the number of complement paths that reach $b=-1,\exist 0<a<2n$.

![image-20240831155118363](/Users/yoriwang/Library/Application Support/typora-user-images/image-20240831155118363.png)

As shown in the figure, if we reflect the path across the line $y=-1$ after a path first reaches -1, for every path that reaches $(2n, 0)$ at step $2n$, we have one corresponding reflected path that reaches $(2n, -2)$ at step $2n$. For a path to reach $(2n,-2)$, there are $(n-1)$ steps of +1 and $(n+1)$ steps of -1. So there are $C_{2n}^{n-1}$ such paths. The number of paths that have the property $b=-1,\exist 0<a<2n$, given that the path reaches $(2n, 0)$ is also $C_{2n}^{n-1}$ and the number of paths that have the property $b\geq0, \forall0<a<2n$ is $C_{2n}^n-C_{2n}^{n-1}$. Hence. the probability that all people will be able to buy their tickets without having to change position is $\frac{1}{n+1}$.

**Note**: Here we use **the reflection principle**. 

## Question 17. Ascending Order Dice

**Question 17**: If you roll three dice, what is the probability they are in ascending order.

**Answer 17**: $\frac{C_6^3}{6^3}$

**Question 17.1**: If you choose 3 numbers $X,Y,Z$ from 1 to 100 what is the probability that $P(X\leq Y\leq Z)$?

**Question 17.2**: Let $X_1,X_2, X_3, X_4$ be $i.i.d.$ Exponentially distributed random variables. Find $P(X_1<X_2<X_3<X_4)$

**Answer 17.2**: $\frac{1}{24}$

## Question 18

**Question 18**: Tim has 20 fair coins and Jeff has 21 fair coins. They both flip their coins. What is the probability that Jeff has more heads than Tim?

**Answer 18**: 0.5

**Question 18.1**: Tim has 20 fair coins and Jeff has 22 fair coins. They both flip their coins. What is the probability that Jeff has more heads than Tim?  Round to the nearest thousandth.

**Answer 18.1**: 0.5 + 0.12238/2

## Question 19 (Unsolved)

**Question 19**: If 75% of all women are tall, 75% of all women are brunette,  and 75% of all women are pretty, what is the minimum percentage who are tall,  brunette, pretty women?

## Question 20

**Question 20**: A stick is cut twice randomly (uniform distribution), what is the probability that the 3 segments can form a triangle?

**Question 20.1**: Let $X, Y, Z\sim U(0,1), IID$. Find the probability that a triangle of side lengths $X$, $Y$, and $Z$ can be formed. 

**Answer 20.1** (*Method 1*): The joint pdf of $X, Y, Z$ is $f_{X, Y, Z}(x, y, z)=1, (x,y,x\in[0, 1])$. The condition that $X, Y, Z$ can form a triangle is $(X+Y>Z)\cap(Y+Z>X)\cap(X+Z>Y)$. This condition corresponds to an area in space and its volume is $1/2$. So $p=1/2$.

**Answer 20.1** (*Method 2*): $P((X+Y>Z)\cap(Y+Z>X)\cap(X+Z>Y))$ is hard to solve. Why? Because the intersaction of these three separate conditions is complicated. So here is the way
$$
P(A\cap B\cap C)=1-P(\bar{A}\cup\bar{B}\cup\bar{C})
$$
$X+Y\leq Z, Y+Z\leq X$, and $X+Z\leq Y$ are mututally exclusive. i.e. $P(A\cap B\cap C)=1-P(\bar{A})-P(\bar{B})-P(\bar{C})$. Then it's easy.

**Question 20.2**: Rope of length 1 is cut into $n$ pieces. What is the expected length of the smallest piece?

**Answer 20.2**: To find the expected length of the smallest piece, we try to figure out the pdf of the smallest length. $X_1, X_2,\cdots,X_{n-1}\sim U(0, 1)$. The order statistics are $X_{(1)}, X_{(2)}, \cdots, X_{(n-1)}$, respectively. Let $V_{(1)}=X_{(1)}-X_{(0)}, V_{(2)}=X_{(2)}-X_{(1)}, \cdots$

To figure out the pdf of $\min V_{(i)}$,
$$
P(\min V_{(i)}>x)=P(V_{(1)}>x, V_{(2)}>x, \cdots, V_{(n)}>x)
$$
The key idea is that the probability of any particular $k$ of the $V_{(i)}$ simultaneously have lengths no longer than $c_1, c_2,\cdots, c_k$, respectively is 
$$
(1-c_1-c_2-\cdots-c_k)^{n-1}
$$
Therefore
$$
P(\min V_{(i)}>x)=P(V_{(1)}>x, V_{(2)}>x, \cdots, V_{(n)}>x)=(1-nx)^{n-1}
$$

$$
E(\min V_{(i)})=\int_0^{\frac{1}{n}}(1-nx)^{n-1}dx=\frac{1}{n^2}
$$





## Question 21 (Unsolved)

**Question 21**: Consider the set of 10 consecutive integers $\{1,2,…,10\}$. How many subsets contain exactly 1 pair of consecutive integers? 

**Answer 21**: 

## Question 22. Expected Distance

**Question 22**: Take any two points on the circle and find the expectation of  the distance between the two points on the circle.

**Answer 22** (*Method 1*): Consider a circle with radius 1. There are two points on the circle with polar coordinates $A(1, \theta_1), B(1, \theta_2)$ and $\theta_1\sim U(0, 2\pi), \theta_2\sim U(0, 2\pi)$. Next we try to figure out the distance. There are two ways, first use distance formula,
$$
d(A, B)=\sqrt{(\cos\theta_1-\cos\theta_2)^2+(\sin\theta_1-\sin\theta_2)^2}=\sqrt{2-2\cos(\theta_1-\theta_2)}=2|\sin\frac{\theta_1-\theta_2}{2}|
$$
second use triangle relationship, which is the same.

Now we figure out the distribution of $\theta_1-\theta_2$ as we know $\theta_1\sim U(0, 2\pi), \theta_2\sim U(0, 2\pi)$. In this way we also know the distribution of the angle between two points, which is uniform distribution between $[0, \pi]$

Last calculate the integration $E(d(A, B))=\int 2|\sin\frac{\theta}{2}|f_\theta d\theta=\frac{4}{\pi}$.

**Answer 22** (*Method 2*): Consider a circle with radius 1. **Fix one point at $(1, 0)$.** The other point is $(1,\theta), \theta\in[0, \pi]$. Then $\theta\sim U(0, \pi)$. Why? Because with fixed one point randomly, the angle between two points is always an uniform distribution.

Then $E(d(A, B))=\int_0^\pi 2\sin\frac{\theta}{2}\frac{1}{\pi}d\theta=\frac{4}{\pi}$ 

**Question 22.1**: Take any two points on the sphere and find the expectation of  the distance between the two points on the sphere.

**Answer 22.1**: It will be very complited to use method 1 in **Question 22**. Fix one point at (0, 0, 1), the other point is randomly chose on the sphere. The distance between two points are easily decided by the angle between them, which is $d=2\sin\frac{\theta}{2}$. So we are looking for the distribution of $\theta$.

Since one point is at $(0, 0 ,1)$. We might think $\theta$ as uniform distribution as **Question 22**. However, random point on sphere does not mean $\theta$ as uniform. Why? For example, when $\theta\rightarrow0$, the candidate points are very few, nearly one point while $\theta=\frac{\pi}{2}$, we get a lot of candidate points, the largest circle on the sphere. So $\theta$ is not uniform. But how to solve it?

A good idea is that the pdf of $\theta$ should be related to the circumference of $XOy$ plane at $\theta$, which is $2\pi\sin\theta$. We can derive an equation,
$$
\int_0^\pi A\sin\theta d\theta=1
$$
we get $A=\frac{1}{2}$.

Another idea is similar but more rigorous. We don't consider points on sphere because the probability of any point on the sphere is zero. Instead we consider an area, which is the area formed by $[\theta, \theta+d\theta]$. The area is apprantly $2\pi\sin\theta d\theta$. The surface of area is $4\pi$. Then we get $\frac{1}{2}sin\theta d\theta$, which is the same as the first idea.

With pdf of $\theta$, we can calculate the expectation of distance, which is $E(d)=\int_0^\pi2\sin\frac{\theta}{2}\frac{1}{2}\sin\theta d\theta=\frac{4}{3}$.

**Question 22.2**: Given $N$ points drawn randomly on the circumference of a circle, what is the probability that they are all within a semicircle?

**Answer 22.2**: If we fix one point, the probability that left $N-1$ points are in the semicircle with the beginning fixed point (clockwise) is $\frac{1}{2}^{n-1}$. Let $A_i$ be the event that $i$th is fixed and what we said happens.
$$
P(\cup_{i=1}^NA_i)=\sum_{i=1}^nP(A_i)=N(\frac{1}{2})^{N-1}
$$
where $A_i$ is mutually exclusive.

**Question 22.3**: A point is chosen uniformly from the unit disk. What is the  expected value of the distance between the point and the center of the disk?

**Answer 22.3**: 2/3

**Question 22.4**: Suppose you pick three points at random on a circle, what is the  probability that the triangle formed by these three points contains the  center for the circle?

## Question 23. Expected Number of Runs

**Question 23**: You have a coin which comes heads with probability 1/6, and you  toss it 1300 times. If there are multiple coins in a row (could be just 1),  we call them a streak. HTHTT, 4 streaks.What is the expected number of  streaks in 1300 tosses?

**Answer 23** (*Method 1*): Let $X_i$ be the event that the $i$ th result is not the same as last one. Then the expected number of streaks are
$$
E(\sum_{i=1}^n X_i)=\sum_{i=1}^n E(X_i)=E(X_1)+E(\sum_{i=2}^nX_i)=1+\frac{5}{18}(n-1)
$$
**Answer 23** (*Method 2*): Let the number of streaks be $N$, then consider the result of last toss
$$
E(N)=\frac{1}{6}E(N|H)+\frac{5}{6}E(N|T)
$$
Then consider the new toss,
$$
E(N+1|H)=\frac{1}{6}E(N+1|HH)+\frac{5}{6}E(N+1|TH)=\frac{1}{6}E(N)+\frac{5}{6}E(N)+\frac{5}{6}
$$

$$
E(N+1|T)=\frac{1}{6}E(N+1|HT)+\frac{5}{6}E(N+1|TT)=\frac{1}{6}E(N)+\frac{5}{6}E(N)+\frac{1}{6}
$$

Then we have 
$$
E(N+1)=E(N)+\frac{5}{18}
$$

**Question 23.1**: Suppose you play a game where you toss 1,000,000 coins, and you  are paid \$1 for a heads but you lose \$1 for a tails. Additionally, you make  $1 extra for every 3 heads in a row (the heads can stack i.e. 4 heads in a row count as 3 heads in a row twice [HHH]H and H[HHH].) What is your expected  payoff?

**Answer 23.1**: $(1000000 - 2) / 8$

**Question 23.2**: Given $n$ ones and $m$ zeros, which are randomly arranged, any consecutive sequence of ones is referred to as a “run” of ones. Find the mathematical expectation (expected value) of the number of runs of ones in the random arrangement of n ones and m zeros.

**Answer 23.2**: Let $X_i$ be the event that the $i$th number is a start of 1 run. Then the expected number of runs are
$$
E(\sum_{i=1}^{m+n} X_i)=\sum_{i=1}^{m+n}E(X_i)
$$
where $E(X_1)=\frac{n}{m+n}, E(X_i)=\frac{m}{m+n}\cdot\frac{n}{m+n-1}(i>1)$. So the answer is $\frac{n(m+1)}{m+n}$.

## Question 24

**Question 24**: Jamie is told there are 3 aces and 3 jacks in a pile. Each turn, a card is drawn without replacement; Jamie earns $1 if he guesses the drawn card correctly. Jamie plays 6 turns under the optimal strategy. How much money should Jamie expect to earn?

**Answer 24**: First thing to solve the problem is to figure out what the optimal strategy is. Apparently, the optimal strategy is to choose the color with largest conditional probability.

Second, let $f(i, j)$ be the expected earnings with $i$ aces and $j$ jacks left. Then

If $i \geq j$, $f(i, j)=\frac{i}{i+j}(1+f(i - 1,j))+\frac{j}{i+j}f(i,j-1)$

If $i<j$, $f(i, j)=\frac{i}{i+j}f(i - 1,j)+\frac{j}{i+j}(1+f(i,j-1))$

These can be concluded by
$$
f(i, j)=\frac{\max(i, j)}{i+j}+\frac{i}{i+j}f(i-1,j)+\frac{j}{i+j}f(i, j-1)
$$
With this recursion relation, we can figure out $f(3, 3)=4.1$

## Question 25. Best Candidate

**Question 25**: If you have 100 candidates you must dicide wether you want them immediately after the interview what's the optimal strategy?

## Question 26. Monte Carlo Related

**Question 26**: How do you generate a standard gaussian random number (ie. $X\sim N(0,1)$ from rand(), or a random number $\sim U(0,1)$?

**Answer 26**: One of the most common and straightforward methods to achieve this is the **Box-Muller Transform**. The Box-Muller Transform is a mathematical technique that transforms two independent uniformly distributed random numbers into two independent standard normally distributed random numbers. Let $U_1$ and $U_2$ be two independent random variables uniformly distributed in $[0, 1]$.

Compute
$$
Z_0=\sqrt{-2\ln U_1}\cdot\cos(2\pi U_2)\\
Z_1=\sqrt{-2\ln U_1}\cdot\sin(2\pi U_2)
$$
 Both $Z_0$ and $Z_1$ are independent standard normal random variables. (How to prove?)

**Question 26.1**: How to use an unbiased coin to constuct uniform distribution? (Morgan Stanley Fixed Income)

**Answer 26.1**: Take the idea from binary search algorithm. Assume that we try to construct a uniform distribution on $[0, 1]$.

We start from $[0, 1]$ and toss first coin. If it shows head, we take $[\frac{1}{2}, 1]$. If it shows tail, we take $[0, \frac{1}{2}]$.

Assume it shows head and we take $[\frac{1}{2}, 1]$, we toss the second coin. If it shows head, we take $[\frac{3}{4}, 1]$. Otherwise, we take $[\frac{1}{2}, \frac{3}{4}]$.

We can continue this process by tossing coin forever. And we will get a number in $[0, 1]$. In this way, we can generate a number based on uniform distribution.

**Question 26.2**: Design a game with probability of winning $p$ for some $0 < p < 1$ with a fair coin.

**Question 26.3**: How do you uniformly sample points at random from a circle with radius $R$?

**Answer 26.3**: 

(Method 1) Generate the radius by using a uniform random variable $u$ in the range $[0, 1]$ and set $r=R\cdot\sqrt{u}$. This ensures the distribution of points is uniform across the area.

Then generate the angle by using a uniform random variable $\theta$ in the range $[0, 2\pi)$ to get the angle.

Last convert to Cartesian coordiantes by $x=r\cos\theta, y=r\sin\theta$

(Method 2) Generate $x, y\sim U(-R, R)$. If $x^2+y^2>R^2$, generate again.

## Question 27

**Question 27**: What is the probability that putting numbers 1-9 in a 3x3 grid so that each row and column adds up to a odd number?

**Answer 27**: In 1-9, we have 5 odd numbers and 4 even numbers. To make each row add up to odd, the only arrangement of 5 numbers is 1 + 1 + 3. So is each column. So the probability is 
$$
p=\frac{9!}{5!4!}\cdot3\cdot3=\frac{1}{14}
$$

## Question 28

**Question 28**: Which of the following games will you play if you could only choose one of them? (1) One fair die, get the square; (2) Two fair dices, get the product; (3) Three fair dices, get the square of their median.

**Answer 28**: To maximize the expectation.

1. $E(X^2)$
2. $E(X_1X_2)=E(X_1)E(X_2)=(E(X))^2\leq E(X^2)$
3. $E(\bar{X}^2)=Var(\bar{X})+E(\bar{X})^2\leq Var(X)+E(\bar{X})^2=E(X^2)$

## Question 29. MLE of Uniform Dis.

**Question 29**: How to estimate $N$ given $n$ numbers randomly generated from $U(0, N)$?

**Answer 29**: $L(N)=(\frac{1}{N})^n$ which is decreasing with $N$. So we can get an estimate $N=\max{X_i}$, since $E(N)=\frac{n}{n+1}N$, we can get an unbiased estimate $N=\frac{n+1}{n}\max X_i$

## Question 30

**Question 30**: Subsets A and B are chosen uniformly at random from the collections of all subsets of a set $X$ of cardinality 5. What is the probability that $A$ is a subset of $B$?

**Answer 30**: For each element $x$ in $X$, there are four possible combinations of inclusion in $A$ and $B$:

1. $x\notin A$ and $x\notin B$
2. $x\notin A$ and $x\in B$
3. $x\in A$ and $x\notin B$
4. $x\in A$ and $x\in B$

Since $A\subset B$ requires that every element in $A$ is also in $B$, the only scenario where this falls is when $x\in A$ but $x\notin B$.

Since the inclusion of each element is independent, we raise the single-element probability to the power of 5 (the number of elements in X ): $P(A \subseteq B) = \left( \frac{3}{4} \right)^5 = \frac{243}{1024}$

## Question 31

**Question 31**: Roll a die 10 times and get $X_1, X_2, \cdots, X_{10}$, what is $E(\max{(X_1, \cdots, X_{10})})$

**Answer 31**: More generally, roll a die $n$ times,
$$
P(\max(X_1, \cdots, X_n)=k)=P(\max\leq k)-P(\max\leq k-1)=(\frac{k}{6})^n-(\frac{k-1}{6})^n
$$
So 
$$
E(\max)=\sum_{k=1}^6 k[(\frac{k}{6})^n-(\frac{k-1}{6})^n]=6-\sum_{k=1}^5 (\frac{k}{6})^n
$$

## Question 32

**Question 32.1**: Let $x_1, x_2,…x_{100}$ be independent Bernoulli variables which take a value of 1 with $p=0.5$. Estimate the probability of $x_1+x_2+…+x_{100}<60$?

**Answer 32**: $x_1, x_2, \cdots, x_{100}$ are independent indentical distributed random variables. According to Central Limit Theorem, when the number of variables is very high, here is 100, $\frac{\bar{X}-0.5}{0.5/\sqrt{100}}\sim N(0, 1)$. So $x_1+x_2+…+x_{100}<60$ is equivalent to $\frac{\bar{X}-0.5}{0.5/\sqrt{100}}<2$. Then we know that $p=0.975$

**Question 32.2**: How to test whether or not a coin is biased?

**Answer 32.2**: We can take a hypothesis test by tossing the coin and recording results for large times. Let $X_1, X_2, \cdots, X_n$ be the result of each toss. $X_i=0$ when it's tail $X_i=1$ when it's head, adn let $p$ be the probability of head. So basically, $X_i$ conforms to a Bernoulli distribution with $p$. 

Let null hypothsis be $H_0: p=0.5$ and $H_1: p\neq0.5$

If $H_0$ holds, 
$$
Z=\frac{\bar{X}-0.5}{0.5/\sqrt{n}}\sim N(0, 1)
$$
If $|Z|\geq2$, we have 95% confidence to reject $H_0$ and the coin is biased.

**Question 32.3**: When should you use a t-test vs a z-test?

**Answer 32.3**: A z-test is used when you know the population variance or if you  don’t know the population variance but have a large sample size. You would  use a t-test when you don’t know the population variance and have a small  sample size.

## Question 33

**Question 33**: How many different ways can you place chess on a $8\times 8$ chessboard,  while keeping the sum of the chess on each row and column even?

**Answer 33**: A well-known combinatorial result tells us that if we label each square of an $n \times n$ board with either 0 or 1, and we require that **the sum of the labels in each row and each column is even**, then the total number of valid configurations is $2^{(n-1)(n-1)}.$

1. **Free choices for first** $n-1$ **rows and** $n-1$ **columns:** For each of the first $n-1$ rows, you can freely choose the values in the first $n-1$ columns (each choice is independently 0 or 1). That’s $(n-1)\times(n-1)$ freely chosen squares, each of which can be 0 or 1, so $2^{(n-1)(n-1)}$ ways so far.
2. **Forcing even sums in each row:** Once you fix the values in the first $(n-1)$ squares of a row, the last square in that row is determined (it must be chosen so that the whole row sum is even). Therefore, no additional freedom (no extra factor of 2) comes from the last column within each of these $(n-1)$ rows; it’s forced by the parity requirement.
3. **Forcing even sums in each column (including the last row):** Similarly, after you have chosen the values in the first $(n-1)$ rows, the squares in the nth row must be whatever ensures each column’s sum is even. Finally, the bottom-right corner (the intersection of the last row and last column) will automatically satisfy both the row and column parity constraints (it’s consistent), so there is no contradiction and no further restriction.

Hence, **every valid configuration is uniquely determined by the freely chosen** $(n-1)\times (n-1)$ **top-left sub-board**, giving $2^{(n-1)(n-1)}$.

## Question 34

**Question 34**: We have an urn with 10 red,10 black, 5 blue, and 10 green balls. We take a sample of 30 balls without replacement, with order. Find the probability that the 5rd, 6th, 21th and 23rd picks are of different colors.

**Answer 34**: 

(Method 1) Assume that we label different numbers on the same color, which means that balls with the same color are different. This won't change the answer to the question. 

Take 30 balls without replacement, all possibilities is $\frac{35!}{5!}$

Now we care about possibilities that satisfy the condition: the 5rd, 6th, 21th and 23rd picks are of different colors. We can first take these 4 balls first. four balls with different colors mean that one red ball, one black ball, one blue ball, and one green ball. ($10\times 10\times 5\times 10\times4!$). Then we consider the remaining 26 balls from 31 balls. ($\frac{31!}{5!}$). So the answer is 
$$
\frac{10\times 10\times 5\times 10\times 4!\times 31!}{35!}=\frac{125}{7\times 11\times 17}
$$
(Method 2) The same assumption with method 1.

The difference is that we only consider these four balls.

All possibilities is $35\times 34\times 33\times 32$

Available possibilites is $10\times 10\times 5\times 10\times 4!$

The answer is the same.

## Question 35. Volume of $n$-dimensional Unit Ball?

**Question 35**: What is the volume of an $n$-dimensional unit ball?

**Answer 35**: 
$$
V_n(R)=\frac{\pi^{n/2}}{\Gamma(\frac{n}{2}+1)}R^n
$$
**Question 35-1**: What is the surface area of an $n$-dimensional unit ball?

## Question 36. 

**Question 36**: $X$ is a dice thrown 100 times and $Y$ is a coin thrown 600 times.  What is the probability $X>Y$?

## Question 37

**Question 37**: You have 50 white marbles and 50 black marbles, and 2 jars to  place them in. How would you place the marbles to maximize the chance that a  random marble drawn from a random jar is white?

