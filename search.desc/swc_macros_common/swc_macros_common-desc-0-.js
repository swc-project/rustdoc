searchState.loadedDescShard("swc_macros_common", 0, "Internal crate for the swc project.\nExample\n<code>Span::def_site().located_at(Span::call_site())</code>\nReturns <code>None</code> if <code>attr</code> is not a doc attribute.\nfail! is a panic! with location reporting.\nCreates a doc comment.\n<code>attr</code> - tokens inside <code>#[]</code>. e.g. <code>derive(EqIgnoreSpan)</code>, …\nBinded field. Note that this struct acts like a binded …\nUsed to bind whole struct or enum.\nVariant.\n<code>prefix</code>: prefix of field binding.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nName of field binding.\n<code>attrs</code>: Attributes of the type.\n<code>EnumName::VariantName</code> for enum, and <code>StructName</code> for struct.\nGenerics of derived impl item.\nAdd <code>Self: #trait_</code>.\nSet <code>defaultness</code>\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSet <code>unsafety</code>\n<code>{ ... }</code>\n<code>[ ... ]</code>\nDescribes how a sequence of token trees is delimited.\nA single syntax tree node of type <code>T</code> followed by its …\nA delimited token stream.\nA token stream surrounded by bracket delimiters.\nAn identifier.\nExtension trait for <code>ItemImpl</code> (impl block).\nA literal string (<code>&quot;hello&quot;</code>), byte string (<code>b&quot;hello&quot;</code>), …\nA literal character (<code>&#39;a&#39;</code>), string (<code>&quot;hello&quot;</code>), number (<code>2.3</code>), …\n<code>∅ ... ∅</code>\n<code>( ... )</code>\nA <code>Punct</code> is a single punctuation character like <code>+</code>, <code>-</code> or <code>#</code>.\nA single punctuation character (<code>+</code>, <code>,</code>, <code>$</code>, etc.).\n<strong>A punctuated sequence of syntax tree nodes of type <code>T</code> </strong>…\nA region of source code, along with macro expansion …\nTypes that can be interpolated inside a <code>quote!</code> invocation.\nAn abstract stream of tokens, or more concretely a …\nA single token or a delimited sequence of token trees …\nReturns the value of this punctuation character as <code>char</code>.\nByte character literal.\nByte string literal.\nC string literal.\nThe span of the invocation of the current procedural macro.\nCharacter literal.\nClears the sequence of all values and punctuation, making …\nReturns an object that holds this group’s <code>span_open()</code> and\nReturns the punctuation used as the delimiter for this …\nReturns true if either this <code>Punctuated</code> is empty, or it has …\nCreates a new suffixed floating-point literal.\nCreates a new unsuffixed floating-point literal.\nCreates a new suffixed floating-point literal.\nCreates a new unsuffixed floating-point literal.\nBorrows the first element in this sequence.\nMutably borrows the first element in this sequence.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nInserts an element at position <code>index</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an iterator over the contents of this sequence as …\nConvert <code>self</code> directly into a <code>TokenStream</code> object.\nProduces this punctuated pair as a tuple of syntax tree …\nExtracts the syntax tree node from this punctuated pair, …\nChecks if this <code>TokenStream</code> is empty.\nDetermines whether this punctuated sequence is empty, …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nReturns an iterator over borrowed syntax tree nodes of …\nReturns an iterator over mutably borrowed syntax tree …\nCreate a new span encompassing <code>self</code> and <code>other</code>.\nBorrows the last element in this sequence.\nMutably borrows the last element in this sequence.\nReturns the number of syntax tree nodes in this punctuated …\nCreates a new span with the same name resolution behavior …\nThe span located at the invocation of the procedural …\nReturns an empty <code>TokenStream</code> containing no token trees.\nCreates a new <code>Group</code> with the given delimiter and token …\nCreates a new <code>Punct</code> from the given character and spacing.\nCreates an empty punctuated sequence.\nCreates a punctuated pair out of a syntax tree node and an …\nReturns an iterator over the contents of this sequence as …\nReturns an iterator over the contents of this sequence as …\nParses one or more occurrences of <code>T</code> separated by …\nParses one or more occurrences of <code>T</code> using the given parse …\nParses zero or more occurrences of <code>T</code> separated by …\nParses zero or more occurrences of <code>T</code> using the given parse …\nRemoves the last punctuated pair from this sequence, or …\nRemoves the trailing punctuation from this punctuated …\nBorrows the punctuation from this punctuated pair, unless …\nMutably borrows the punctuation from this punctuated pair, …\nAppends a syntax tree node onto the end of this punctuated …\nAppends a trailing punctuation onto the end of this …\nAppends a syntax tree node onto the end of this punctuated …\nCreates a new span with the same line/column information …\nConfigures the span for <em>only this token</em>.\nConfigures the span for this <code>Group</code>’s delimiters, but not …\nConfigure the span for this punctuation character.\nConfigures the span associated for this literal.\nReturns the source text behind a span. This preserves the …\nReturns the spacing of this punctuation character, …\nReturns the span of this tree, delegating to the <code>span</code> …\nReturns the span for the delimiters of this token stream, …\nReturns the span for this punctuation character.\nReturns the span encompassing this literal.\nReturns the span pointing to the closing delimiter of this …\nReturns the span pointing to the opening delimiter of this …\nReturns the <code>TokenStream</code> of tokens that are delimited in …\nString literal.\nReturns a <code>Span</code> that is a subset of <code>self.span()</code> containing …\nConvert <code>self</code> directly into a <code>TokenStream</code> object.\nWrite <code>self</code> to the given <code>TokenStream</code>.\nDetermines whether this punctuated sequence ends with a …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nConvert <code>proc_macro2::Span</code> to <code>proc_macro::Span</code>.\nCreates a new suffixed integer literal with the specified …\nCreates a new unsuffixed integer literal with the …\nBorrows the syntax tree node from this punctuated pair.\nMutably borrows the syntax tree node from this punctuated …\nInstead of")