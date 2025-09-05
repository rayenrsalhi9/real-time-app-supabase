export default function Form({metrics}) {

    function addDeal() {
        console.log('form submitted')
    }

    return (
        <form action={addDeal}>
            <h2 className="form-title">Add new sales deal</h2>
            <div className="form-content">
                <div className="form-field">
                    <label htmlFor="name">Name:</label>
                    <select name="name" id="name">
                        {metrics.map(m => (
                            <option key={m.name} value={m.name}>{m.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-field">
                    <label htmlFor="value">Value:</label>
                    <input type="number" id="value" name="value" defaultValue={0} min="0" step={10} />
                </div>
                <button className="submit-btn">Add deal</button>
            </div>
        </form>
    )
}
