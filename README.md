# CrossLend Protocol
Crosslend is a decentralized, non-custodial liquidity platform built on the CrossFi Chain, offering users the ability to lend and borrow assets seamlessly.


### Technical Document

**Cross Lend Protocol: Technical Overview**

**1. Introduction**  
Cross Lend Protocol is a decentralized, open-source lending and borrowing platform designed to provide financial services on the CrossFi Chain. The protocol follows the Aave model, allowing users to supply and borrow multiple assets while earning interest on supplied tokens. Cross Lend is secured by smart contracts and operates in a decentralized, non-custodial manner.

**2. Protocol Architecture**

- **Smart Contracts**:  
Cross Lend leverages a suite of smart contracts to manage the supply and borrowing functions of the protocol. Each asset is assigned a corresponding liquidity pool contract, which holds the deposited funds and manages the interest accrual for lenders. The primary smart contracts are:
  - **Lending Pool Contract**: Manages all liquidity pools and handles deposits, withdrawals, and collateral management.
  - **Collateral Manager Contract**: Ensures the safety of loans by managing over-collateralization, liquidation, and loan-to-value (LTV) ratios.
  - **Price Oracle Contract**: Provides real-time price feeds for all supported tokens, sourced from decentralized oracles.
  
- **Core Contracts**:  
  - **Interest Rate Model**: Determines the APY (Annual Percentage Yield) for both supply and borrowing based on the utilization rate of each asset’s pool.
  - **Liquidation Mechanism**: Liquidates collateral when a borrower's health factor falls below the liquidation threshold to prevent insolvency.
  - **Governance Module**: Future upgrades and parameter adjustments will be governed by the community via decentralized governance mechanisms.

**3. Token Support**
Cross Lend Protocol supports the following assets on the CrossFi Chain test network:
- **XFT (CrossFi Foundation Token)**
- **XUSD (CrossFi USD stablecoin)**
- **USDT (Tether)**
- **WXFI (Wrapped CrossFi)**
- **eMPX (CrossFi Experimental Token)**

Each of these tokens can be supplied to the protocol to earn interest or be used as collateral to borrow other assets. The supported token types can be expanded through community voting and governance.

**4. Interest Rate Model**

Cross Lend uses a dynamic interest rate model, where the rate fluctuates based on the utilization of the liquidity pool:
- **Utilization Rate**: The ratio of borrowed assets to the total assets in the pool. Higher utilization means higher interest rates for both lenders and borrowers.
- **Stable and Variable Borrowing Rates**: Borrowers can choose between stable and variable interest rates. Stable rates provide more predictability, while variable rates adjust based on market conditions.

**5. Liquidation Process**

When the value of a borrower's collateral falls below the liquidation threshold, the protocol triggers a liquidation event. A portion of the borrower's collateral is sold to repay the debt, ensuring that the liquidity pool remains solvent.

- **Liquidation Threshold**: Defined per asset, typically ranging between 75% and 85% of the collateral value.
- **Penalty Fee**: A liquidation penalty is imposed on the borrower when liquidation occurs. This fee is distributed to liquidity providers as compensation for the increased risk.

**6. Price Oracle Integration**

Cross Lend integrates with decentralized oracles (such as Chainlink or the CrossFi native oracle) to fetch real-time price data for all supported assets. This ensures that all loans and collateral are valued accurately, providing transparency and reducing risks related to price volatility.

**7. Collateral Management**

Each token has a different collateral factor (LTV ratio) that dictates how much can be borrowed against it. For example:
- **XUSD**: Maximum LTV of 75%
- **XFT**: Maximum LTV of 70%
- **USDT**: Maximum LTV of 80%

**8. Governance and Roadmap**

Cross Lend Protocol is community-governed. Key decisions regarding protocol upgrades, asset listings, and parameter adjustments are made through governance proposals and token voting.

**Planned Upgrades:**
- **Cross-Chain Lending**: Enabling users to lend and borrow across multiple blockchains.
- **Flash Loans**: Allowing uncollateralized borrowing for advanced DeFi use cases.
- **Stable Interest Rate Pools**: Expanding options for fixed-income yield generation.

**9. Security Audits**

Cross Lend Protocol’s smart contracts are subjected to rigorous audits to ensure the safety of user funds. All code is open-source, and the protocol undergoes continuous review by the developer community and independent auditors.

---

**Conclusion**  
Cross Lend Protocol offers a robust and scalable solution for decentralized lending and borrowing. Built on the CrossFi Chain and powered by advanced smart contracts, the protocol ensures transparency, security, and efficiency for all participants in the DeFi ecosystem.
