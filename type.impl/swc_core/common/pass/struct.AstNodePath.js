(function() {var type_impls = {
"swc_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AstNodePath%3CN%3E\" class=\"impl\"><a href=\"#impl-AstNodePath%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"swc_core/common/pass/struct.AstNodePath.html#tymethod.new\" class=\"fn\">new</a>(\n    kinds: <a class=\"struct\" href=\"swc_core/common/pass/struct.AstKindPath.html\" title=\"struct swc_core::common::pass::AstKindPath\">AstKindPath</a>&lt;&lt;N as <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>&gt;::<a class=\"associatedtype\" href=\"swc_core/common/pass/trait.NodeRef.html#associatedtype.ParentKind\" title=\"type swc_core::common::pass::NodeRef::ParentKind\">ParentKind</a>&gt;,\n    path: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;N&gt;\n) -&gt; <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;</h4></section><section id=\"method.kinds\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"swc_core/common/pass/struct.AstNodePath.html#tymethod.kinds\" class=\"fn\">kinds</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"swc_core/common/pass/struct.AstKindPath.html\" title=\"struct swc_core::common::pass::AstKindPath\">AstKindPath</a>&lt;&lt;N as <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>&gt;::<a class=\"associatedtype\" href=\"swc_core/common/pass/trait.NodeRef.html#associatedtype.ParentKind\" title=\"type swc_core::common::pass::NodeRef::ParentKind\">ParentKind</a>&gt;</h4></section><section id=\"method.with_guard\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"swc_core/common/pass/struct.AstNodePath.html#tymethod.with_guard\" class=\"fn\">with_guard</a>(&amp;mut self, node: N) -&gt; <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePathGuard.html\" title=\"struct swc_core::common::pass::AstNodePathGuard\">AstNodePathGuard</a>&lt;'_, N&gt;</h4></section><section id=\"method.with_index_guard\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"swc_core/common/pass/struct.AstNodePath.html#tymethod.with_index_guard\" class=\"fn\">with_index_guard</a>(&amp;mut self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePathIndexGuard.html\" title=\"struct swc_core::common::pass::AstNodePathIndexGuard\">AstNodePathIndexGuard</a>&lt;'_, N&gt;</h4></section><section id=\"method.with\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"swc_core/common/pass/struct.AstNodePath.html#tymethod.with\" class=\"fn\">with</a>&lt;F, Ret&gt;(&amp;mut self, node: N, op: F) -&gt; Ret<div class=\"where\">where\n    F: for&lt;'aa&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;'aa mut <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;) -&gt; Ret,</div></h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: Use with_guard instead</span></div></span><section id=\"method.with_index\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"swc_core/common/pass/struct.AstNodePath.html#tymethod.with_index\" class=\"fn\">with_index</a>&lt;F, Ret&gt;(&amp;mut self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, op: F) -&gt; Ret<div class=\"where\">where\n    F: for&lt;'aa&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;'aa mut <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;) -&gt; Ret,</div></h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: Use with_index_guard instead</span></div></span></div></details>",0,"swc_core::ecma::visit::AstNodePath"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AstNodePath%3CN%3E\" class=\"impl\"><a href=\"#impl-Clone-for-AstNodePath%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>,\n    &lt;N as <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>&gt;::<a class=\"associatedtype\" href=\"swc_core/common/pass/trait.NodeRef.html#associatedtype.ParentKind\" title=\"type swc_core::common::pass::NodeRef::ParentKind\">ParentKind</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","swc_core::ecma::visit::AstNodePath"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AstNodePath%3CN%3E\" class=\"impl\"><a href=\"#impl-Debug-for-AstNodePath%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>,\n    &lt;N as <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>&gt;::<a class=\"associatedtype\" href=\"swc_core/common/pass/trait.NodeRef.html#associatedtype.ParentKind\" title=\"type swc_core::common::pass::NodeRef::ParentKind\">ParentKind</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","swc_core::ecma::visit::AstNodePath"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-AstNodePath%3CN%3E\" class=\"impl\"><a href=\"#impl-Default-for-AstNodePath%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","swc_core::ecma::visit::AstNodePath"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-AstNodePath%3CN%3E\" class=\"impl\"><a href=\"#impl-Deref-for-AstNodePath%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;N&gt;</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;&lt;<a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","swc_core::ecma::visit::AstNodePath"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AstNodePath%3CN%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-AstNodePath%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>,\n    &lt;N as <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>&gt;::<a class=\"associatedtype\" href=\"swc_core/common/pass/trait.NodeRef.html#associatedtype.ParentKind\" title=\"type swc_core::common::pass::NodeRef::ParentKind\">ParentKind</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","swc_core::ecma::visit::AstNodePath"],["<section id=\"impl-Eq-for-AstNodePath%3CN%3E\" class=\"impl\"><a href=\"#impl-Eq-for-AstNodePath%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>,\n    &lt;N as <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>&gt;::<a class=\"associatedtype\" href=\"swc_core/common/pass/trait.NodeRef.html#associatedtype.ParentKind\" title=\"type swc_core::common::pass::NodeRef::ParentKind\">ParentKind</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","swc_core::ecma::visit::AstNodePath"],["<section id=\"impl-StructuralPartialEq-for-AstNodePath%3CN%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-AstNodePath%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"swc_core/common/pass/struct.AstNodePath.html\" title=\"struct swc_core::common::pass::AstNodePath\">AstNodePath</a>&lt;N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"swc_core/common/pass/trait.NodeRef.html\" title=\"trait swc_core::common::pass::NodeRef\">NodeRef</a>,</div></h3></section>","StructuralPartialEq","swc_core::ecma::visit::AstNodePath"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()