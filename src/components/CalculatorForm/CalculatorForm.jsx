export default function CalculatorForm({ investmentParameters, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            required
            value={investmentParameters.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            required
            value={investmentParameters.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            required
            value={investmentParameters.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="investment-duration">Investment Duration</label>
          <input
            type="number"
            required
            value={investmentParameters.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
