<?php if ( post_password_required() ) return; ?>

<div class="comments">

	<a name="comments"></a>

<?php if ( ! have_comments() && ! comments_open() ) : ?>

		<p class="nocomments">A sessão de comentários está fechada e não foi feito nenhum comentário.</p>

<?php else: ?>

		<?php if ( ! comments_open() ) : ?>

			<p class="nocomments"><?php _e( 'Sugestões estão encerradas.', 'hemingway' ); ?></p>

		<?php else: ?>

			<?php $comments_args = array(
			 	'title_reply'       => __( 'Sugerir um novo dispositivo' ),
			  	'label_submit'      => __( 'Enviar sugestão' ),
			  	'format'            => 'xhtml',

				'comment_notes_before' =>
					'<p class="comment-notes">' . __( 'Your email address will not be published.', 'hemingway' ) . '</p>',

				'comment_field' =>
					'<p class="comment-form-comment"><textarea id="comment" name="comment" cols="45" rows="6" required>' . '</textarea></p>',

				'fields' => apply_filters( 'comment_form_default_fields', array(

					'author' =>
						'<p class="comment-form-author">' .
						'<input id="author" name="author" type="text" placeholder="' . __('Name','hemingway') . '" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30" />' . '<label for="author">Author</label> ' . ( $req ? '<span class="required">*</span>' : '' ) . '</p>',

					'email' =>
						'<p class="comment-form-email">' . '<input id="email" name="email" type="text" placeholder="' . __('Email','hemingway') . '" value="' . esc_attr(  $commenter['comment_author_email'] ) . '" size="30" /><label for="email">Email</label> ' . ( $req ? '<span class="required">*</span>' : '' ) . '</p>',

					'url' =>
					'<p class="comment-form-url">' . '<input id="url" name="url" type="text" placeholder="' . __('Website','hemingway') . '" value="' . esc_attr( $commenter['comment_author_url'] ) . '" size="30" /><label for="url">Website</label></p>')
				),
			);

			comment_form($comments_args);

			?>

		<?php endif; ?>

		<?php if ( have_comments() ) : ?>

			<h2 class="comments-title">

				<?php echo count($wp_query->comments_by_type['comment']) . ' ';
				echo _n( 'Sugestão' , 'Sugestões' , count($wp_query->comments_by_type['comment']), 'hemingway' ); ?>

			</h2>

			<ol class="commentlist">
			    <?php wp_list_comments( array( 'type' => 'comment', 'callback' => 'cdbr_pna_comment' ) ); ?>
			</ol>

			<?php if (!empty($comments_by_type['pings'])) : ?>

				<div class="pingbacks">

					<div class="pingbacks-inner">

						<h3 class="pingbacks-title">

							<?php echo count($wp_query->comments_by_type['pings']) . ' ';
							echo _n( 'Pingback', 'Pingbacks', count($wp_query->comments_by_type['pings']), 'hemingway' ); ?>

						</h3>

						<ol class="pingbacklist">
						    <?php wp_list_comments( array( 'type' => 'pings', 'callback' => 'hemingway_comment' ) ); ?>
						</ol>

					</div>

				</div>

			<?php endif; ?>

			<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>

				<div class="comment-nav-below" role="navigation">

					<div class="post-nav-older"><?php previous_comments_link( __( '&laquo; Outras<span> sugestões</span>', 'hemingway' ) ); ?></div>

					<div class="post-nav-newer"><?php next_comments_link( __( 'Sugestões mais novasNewer &raquo;', 'hemingway' ) ); ?></div>

					<div class="clear"></div>

				</div>

			<?php endif; ?>

		<?php endif; ?>

	</div>

<?php endif; ?>

</div>
