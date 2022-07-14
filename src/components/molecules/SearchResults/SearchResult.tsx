import React from 'react'

const SearchResult = (suggestions:string[]) => {
  return (
    <>
     {
                              suggestions.map((suggestion: any, i) => {
                                return (
                                  <>
                                    <div
                                      key={i}
                                     
                                    >
                                      {suggestion.name +
                                        " by " +
                                        suggestion.author}
                                    </div>
                                  </>
                                );
                              })}
    </>
  )
}

export default SearchResult