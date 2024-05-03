
const SearchInput = ( {searchValue, setValue}) => {

    return (
        <div>
            <search>
                <form>
                    <input
                        value={searchValue}
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                        placeholder="Xiaomi"/>
                </form>
            </search>

        </div>
    )
}
export default SearchInput