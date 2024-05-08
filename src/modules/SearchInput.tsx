interface SearchTypes {
    searchValue: string;
    setValue: (searchValue: string) => void;
}
const SearchInput = ( {searchValue, setValue} : SearchTypes) => {

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