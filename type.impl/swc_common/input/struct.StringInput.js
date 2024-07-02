(function() {var type_impls = {
"swc_common":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-StringInput%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#10\">source</a><a href=\"#impl-Clone-for-StringInput%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"swc_common/input/struct.StringInput.html\" title=\"struct swc_common::input::StringInput\">StringInput</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#10\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"swc_common/input/struct.StringInput.html\" title=\"struct swc_common::input::StringInput\">StringInput</a>&lt;'a&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","swc_common::input::SourceFileInput"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26SourceFile%3E-for-StringInput%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#59-63\">source</a><a href=\"#impl-From%3C%26SourceFile%3E-for-StringInput%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"swc_common/source_map/struct.SourceFile.html\" title=\"struct swc_common::source_map::SourceFile\">SourceFile</a>&gt; for <a class=\"struct\" href=\"swc_common/input/struct.StringInput.html\" title=\"struct swc_common::input::StringInput\">StringInput</a>&lt;'a&gt;</h3></section></summary><div class=\"docblock\"><p>Creates an <a href=\"swc_common/input/trait.Input.html\" title=\"trait swc_common::input::Input\">Input</a> from <a href=\"swc_common/source_map/struct.SourceFile.html\" title=\"struct swc_common::source_map::SourceFile\">SourceFile</a>. This is an alias for</p>\n\n<div class=\"example-wrap ignore\"><a href=\"#\" class=\"tooltip\" title=\"This example is not tested\">ⓘ</a><pre class=\"rust rust-example-rendered\"><code>   StringInput::new(<span class=\"kw-2\">&amp;</span>fm.src, fm.start_pos, fm.end_pos)</code></pre></div>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#60-62\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(fm: &amp;'a <a class=\"struct\" href=\"swc_common/source_map/struct.SourceFile.html\" title=\"struct swc_common::source_map::SourceFile\">SourceFile</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&'a SourceFile>","swc_common::input::SourceFileInput"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Input-for-StringInput%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#65-221\">source</a><a href=\"#impl-Input-for-StringInput%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"swc_common/input/trait.Input.html\" title=\"trait swc_common::input::Input\">Input</a> for <a class=\"struct\" href=\"swc_common/input/struct.StringInput.html\" title=\"struct swc_common::input::StringInput\">StringInput</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cur_pos\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#109-111\">source</a><a href=\"#method.cur_pos\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#tymethod.cur_pos\" class=\"fn\">cur_pos</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"swc_common/source_map/struct.BytePos.html\" title=\"struct swc_common::source_map::BytePos\">BytePos</a></h4></section></summary><div class=\"docblock\"><p>TODO(kdy1): Remove this?</p>\n</div></details><section id=\"method.cur\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#67-69\">source</a><a href=\"#method.cur\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#tymethod.cur\" class=\"fn\">cur</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a>&gt;</h4></section><section id=\"method.peek\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#72-74\">source</a><a href=\"#method.peek\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#tymethod.peek\" class=\"fn\">peek</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a>&gt;</h4></section><section id=\"method.peek_ahead\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#77-79\">source</a><a href=\"#method.peek_ahead\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#tymethod.peek_ahead\" class=\"fn\">peek_ahead</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a>&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.bump\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#82-90\">source</a><a href=\"#method.bump\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"swc_common/input/trait.Input.html#tymethod.bump\" class=\"fn\">bump</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Safety <a href=\"swc_common/input/trait.Input.html#tymethod.bump\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cur_as_ascii\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#93-100\">source</a><a href=\"#method.cur_as_ascii\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#method.cur_as_ascii\" class=\"fn\">cur_as_ascii</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;</h4></section></summary><div class='docblock'>Returns <a href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html#variant.None\" title=\"variant core::option::Option::None\">None</a> if it’s end of input <strong>or</strong> current character is not an\nascii character.</div></details><section id=\"method.is_at_start\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#103-105\">source</a><a href=\"#method.is_at_start\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#tymethod.is_at_start\" class=\"fn\">is_at_start</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.last_pos\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#114-116\">source</a><a href=\"#method.last_pos\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#tymethod.last_pos\" class=\"fn\">last_pos</a>(&amp;self) -&gt; <a class=\"struct\" href=\"swc_common/source_map/struct.BytePos.html\" title=\"struct swc_common::source_map::BytePos\">BytePos</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.slice\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#119-134\">source</a><a href=\"#method.slice\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"swc_common/input/trait.Input.html#tymethod.slice\" class=\"fn\">slice</a>(&amp;mut self, start: <a class=\"struct\" href=\"swc_common/source_map/struct.BytePos.html\" title=\"struct swc_common::source_map::BytePos\">BytePos</a>, end: <a class=\"struct\" href=\"swc_common/source_map/struct.BytePos.html\" title=\"struct swc_common::source_map::BytePos\">BytePos</a>) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>Safety <a href=\"swc_common/input/trait.Input.html#tymethod.slice\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.uncons_while\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#137-158\">source</a><a href=\"#method.uncons_while\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#tymethod.uncons_while\" class=\"fn\">uncons_while</a>&lt;F&gt;(&amp;mut self, pred: F) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a><div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>,</div></h4></section></summary><div class='docblock'>Takes items from stream, testing each one with predicate. returns the\nrange of items which passed predicate.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.find\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#160-183\">source</a><a href=\"#method.find\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#tymethod.find\" class=\"fn\">find</a>&lt;F&gt;(&amp;mut self, pred: F) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"swc_common/source_map/struct.BytePos.html\" title=\"struct swc_common::source_map::BytePos\">BytePos</a>&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>,</div></h4></section></summary><div class='docblock'>This method modifies [last_pos()] and [cur_pos()].</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#186-194\">source</a><a href=\"#method.reset_to\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"swc_common/input/trait.Input.html#tymethod.reset_to\" class=\"fn\">reset_to</a>(&amp;mut self, to: <a class=\"struct\" href=\"swc_common/source_map/struct.BytePos.html\" title=\"struct swc_common::source_map::BytePos\">BytePos</a>)</h4></section></summary><div class='docblock'>Safety <a href=\"swc_common/input/trait.Input.html#tymethod.reset_to\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_byte\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#197-204\">source</a><a href=\"#method.is_byte\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#method.is_byte\" class=\"fn\">is_byte</a>(&amp;mut self, c: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Implementors can override the method to make it faster. <a href=\"swc_common/input/trait.Input.html#method.is_byte\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_str\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#207-209\">source</a><a href=\"#method.is_str\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#tymethod.is_str\" class=\"fn\">is_str</a>(&amp;self, s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Implementors can override the method to make it faster. <a href=\"swc_common/input/trait.Input.html#tymethod.is_str\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.eat_byte\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#212-220\">source</a><a href=\"#method.eat_byte\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"swc_common/input/trait.Input.html#method.eat_byte\" class=\"fn\">eat_byte</a>(&amp;mut self, c: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Implementors can override the method to make it faster. <a href=\"swc_common/input/trait.Input.html#method.eat_byte\">Read more</a></div></details></div></details>","Input","swc_common::input::SourceFileInput"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StringInput%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#20-52\">source</a><a href=\"#impl-StringInput%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"struct\" href=\"swc_common/input/struct.StringInput.html\" title=\"struct swc_common::input::StringInput\">StringInput</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#29-38\">source</a><h4 class=\"code-header\">pub fn <a href=\"swc_common/input/struct.StringInput.html#tymethod.new\" class=\"fn\">new</a>(src: &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, start: <a class=\"struct\" href=\"swc_common/source_map/struct.BytePos.html\" title=\"struct swc_common::source_map::BytePos\">BytePos</a>, end: <a class=\"struct\" href=\"swc_common/source_map/struct.BytePos.html\" title=\"struct swc_common::source_map::BytePos\">BytePos</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p><code>start</code> and <code>end</code> can be arbitrary value, but start should be less than\nor equal to end.</p>\n<p><code>swc</code> get this value from [SourceMap] because code generator depends on\nsome methods of [SourceMap].\nIf you are not going to use methods from\n[SourceMap], you may use any value.</p>\n</div></details><section id=\"method.as_str\" class=\"method\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#41-43\">source</a><h4 class=\"code-header\">pub fn <a href=\"swc_common/input/struct.StringInput.html#tymethod.as_str\" class=\"fn\">as_str</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section><section id=\"method.bump_bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/swc_common/input.rs.html#46-51\">source</a><h4 class=\"code-header\">pub fn <a href=\"swc_common/input/struct.StringInput.html#tymethod.bump_bytes\" class=\"fn\">bump_bytes</a>(&amp;mut self, n: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></div></details>",0,"swc_common::input::SourceFileInput"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()